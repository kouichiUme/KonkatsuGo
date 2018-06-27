curl -H 'Content-Type:application/json' -d "{"key":"val","key2":",val2"}"  https://localhost:8080/post/data --insecure

openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 365
echo "deb https://apache.bintray.com/couchdb-deb xenial main"     | sudo tee -a /etc/apt/sources.list
sudo apt-get install couchdb
