#since we can not make mutliple requests using browsers, we need to use curl command to make multiplt requests

#Number of requests to send
REQUESTS=5

#URL of load balancer
URL="http://localhost:3000"

#loop to send requests on the load balancer
for ((i=1; i<=REQUESTS; i++)); do
    curl $URL &
done

wait 
echo "All requests have been sent"