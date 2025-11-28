# backup
cp client-7e152ee6.js.bak /tmp
cp client-7e152ee6.js client-7e152ee6.js.bak
cp index-7dd7d9bc.js index-7dd7d9bc.js.bak
cp shell-interface-8c9c4871.js shell-interface-8c9c4871.js.bak
cp bootstrap-1c62aa90.js bootstrap-1c62aa90.js.bak

# 1) disable the path string so the client won't try to connect
sed -i 's/\/lively-socket.io/\/_disabled_lively_socket_io/g' client-7e152ee6.js index-7dd7d9bc.js shell-interface-8c9c4871.js bootstrap-1c62aa90.js

# 2) (optional) neutralize socket.io client assignment used by recorder:
# Replace "__varRecorder__.ioClient = require(\"socket.io-client\");" with null assignment
perl -0777 -pe 's/__varRecorder__\.(ioClient)\s*=\s*require\([\"\\\']socket\.io-client[\"\\\']\)\s*;/$&/s' -i client-7e152ee6.js
# If you prefer an explicit null:
perl -0777 -pe 's/__varRecorder__\.ioClient\s*=\s*require\([\"\\\']socket\.io-client[\"\\\']\)\s*;/__varRecorder__.ioClient = null;/g' -i client-7e152ee6.js
