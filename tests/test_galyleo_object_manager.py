import unittest
from unittest.mock import patch, MagicMock
from galyleo_object_manager import GalyleoTableServer, DashboardManager

class TestGalyleoTableServer(unittest.TestCase):

    @patch('galyleo_object_manager.list_tables')
    @patch('galyleo_object_manager._get_table_')
    def test_initialization(self, mock_get_table, mock_list_tables):
        mock_list_tables.return_value = ["user1/table1.sdml"]
        mock_get_table.return_value = {
            "name": "user1/table1",
            "table_dictionary": {"key": "value"}
        }

        server = GalyleoTableServer("http://example.com")

        self.assertIn("user1/table1", server.servers)
        self.assertEqual(server.servers["user1/table1"], {"key": "value"})

    @patch('galyleo_object_manager.put_table')
    def test_publish_table(self, mock_put_table):
        server = GalyleoTableServer("http://example.com")

        server.publish_table("user1", "table1", {"key": "value"})

        mock_put_table.assert_called_once_with("user1", "table1.sdml", {"key": "value"})
        self.assertIn("user1/table1", server.servers)

    @patch('galyleo_object_manager.delete_table')
    def test_delete_table(self, mock_delete_table):
        server = GalyleoTableServer("http://example.com")
        server.servers = {"user1/table1": {"key": "value"}}

        server.delete_table("user1", "table1")

        mock_delete_table.assert_called_once_with("user1", "table1.sdml")
        self.assertNotIn("user1/table1", server.servers)

class TestDashboardManager(unittest.TestCase):

    @patch('galyleo_object_manager.put_dashboard')
    def test_add_dashboard(self, mock_put_dashboard):
        manager = DashboardManager("http://example.com")

        url = manager.add_dashboard("user1", "dashboard1", {"key": "value"})

        mock_put_dashboard.assert_called_once_with("user1", "dashboard1.gd.json", {"key": "value"})
        self.assertEqual(url, "http://example.com/user1/dashboard1.gd.json")

    @patch('galyleo_object_manager.delete_dashboard')
    def test_delete_dashboard(self, mock_delete_dashboard):
        manager = DashboardManager("http://example.com")

        manager.delete_dashboard("user1", "dashboard1")

        mock_delete_dashboard.assert_called_once_with("user1", "dashboard1.gd.json")

    @patch('galyleo_object_manager.list_dashboards')
    def test_list_dashboards(self, mock_list_dashboards):
        mock_list_dashboards.return_value = ["dashboard1.gd.json", "dashboard2.gd.json"]
        manager = DashboardManager("http://example.com")

        dashboards = manager.list_dashboards("user1")

        mock_list_dashboards.assert_called_once_with("user1")
        self.assertEqual(dashboards, ["dashboard1.gd.json", "dashboard2.gd.json"])

if __name__ == "__main__":
    unittest.main()
