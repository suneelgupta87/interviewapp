window.data = window.data || {};
window.data.microservices = {
  "What are microservices?": {
    "answer": `
<h3>Answer</h3>
<p>
Microservices are small, independently deployable services that work together to build a larger application.
</p>
`
  },
  "What is an API Gateway?": {
    "answer": `
<h3>Answer</h3>
<p>
An API Gateway acts as a single entry point that routes requests to the appropriate services and handles cross-cutting concerns.
</p>
`
  },
  "How do you prevent cascading failures in Microservices?": {
    "answer": `
    <p>
        <strong>Cascading Failure</strong> occurs when the failure of one
        service causes other dependent services to fail, eventually affecting
        the entire application. The goal is to isolate failures so that one
        service does not bring down the whole system.
    </p>

    <p><strong>Prevention Strategies:</strong></p>

    <ul>
        <li>Implement Retry Policies with exponential backoff.</li>
        <li>Use the Circuit Breaker pattern to stop repeated calls to failing services.</li>
        <li>Set appropriate request timeouts.</li>
        <li>Use Fallback mechanisms to return default or cached data.</li>
        <li>Implement Bulkhead Isolation to isolate resources.</li>
        <li>Use Message Queues (Azure Service Bus/RabbitMQ) for asynchronous processing.</li>
        <li>Apply Rate Limiting to prevent service overload.</li>
        <li>Monitor services using Application Insights and Health Checks.</li>
    </ul>

    <p><strong>Implementation Example (Circuit Breaker with Polly):</strong></p>

    <pre><code class="language-csharp">
builder.Services.AddHttpClient("PaymentAPI")
    .AddPolicyHandler(GetRetryPolicy())
    .AddPolicyHandler(GetCircuitBreakerPolicy());
    </code></pre>

    <pre><code class="language-csharp">
Policy
    .Handle&lt;Exception&gt;()
    .CircuitBreakerAsync(3, TimeSpan.FromSeconds(30));
    </code></pre>

    <p><strong>Real-Time Example:</strong></p>

    <p>
        In an e-commerce application, if the Payment Service becomes unavailable,
        the Order Service should not continuously retry every request. Instead,
        the Circuit Breaker opens after repeated failures, preventing additional
        requests. The API can return a friendly message or queue the request for
        later processing using Azure Service Bus.
    </p>

    <p><strong>Common Use Cases:</strong></p>

    <ul>
        <li>Microservices architecture.</li>
        <li>External REST API integrations.</li>
        <li>Payment gateways.</li>
        <li>Cloud-based distributed systems.</li>
        <li>High-traffic e-commerce applications.</li>
    </ul>

    <div class="interview-answer">
        <strong>Interview One-Liner:</strong>
        Cascading failures are prevented using Retry Policies, Circuit Breakers, Timeouts, Fallbacks, Bulkhead Isolation, asynchronous messaging, and continuous monitoring.
    </div>
    `
},
"What is Service Discovery in Microservices?": {
    "answer": `
    <p>
        <strong>Service Discovery</strong> is a mechanism that enables
        microservices to automatically locate and communicate with each other
        without hardcoding IP addresses or URLs.
    </p>

    <p>
        In a microservices architecture, service instances can be created,
        removed, or scaled dynamically. Service Discovery maintains a registry
        of available service instances and provides the correct endpoint to
        requesting services.
    </p>

    <p><strong>How It Works:</strong></p>

    <ul>
        <li>A service starts and registers itself with a Service Registry.</li>
        <li>The registry stores the service name and network address.</li>
        <li>When another service needs to communicate, it queries the registry.</li>
        <li>The registry returns the available service instance.</li>
        <li>The requesting service communicates with the discovered endpoint.</li>
    </ul>

    <p><strong>Architecture:</strong></p>

    <pre><code class="language-text">
                Service Registry
          (Consul / Eureka / Kubernetes)

                   ▲
          Register │ Lookup
                   │
    ┌──────────────┼──────────────┐
    ▼              ▼              ▼
Order Service  Payment Service  Inventory Service
    </code></pre>

    <p><strong>Real-Time Example:</strong></p>

    <p>
        Suppose three instances of the Payment Service are running.
        Instead of hardcoding an IP address, the Order Service requests
        the Payment Service endpoint from the Service Registry. The registry
        returns one of the available instances, allowing communication even
        when services are scaled or restarted.
    </p>

    <p><strong>Common Use Cases:</strong></p>

    <ul>
        <li>Kubernetes.</li>
        <li>Azure Kubernetes Service (AKS).</li>
        <li>Docker Swarm.</li>
        <li>Consul.</li>
        <li>Netflix Eureka.</li>
        <li>Large-scale Microservices.</li>
    </ul>

    <div class="interview-answer">
        <strong>Interview One-Liner:</strong>
        Service Discovery allows microservices to dynamically locate each other through a service registry instead of using hardcoded IP addresses or URLs.
    </div>
    `
},
"Explain Circuit Breaker Pattern in Microservices": {
    "answer": `
    <p>
        The <strong>Circuit Breaker Pattern</strong> is a resilience pattern
        used in microservices to prevent repeated requests to a failing service.
        Instead of continuously calling an unavailable service, the circuit
        breaker temporarily stops requests, allowing the service time to recover.
    </p>

    <p><strong>Circuit Breaker States:</strong></p>

    <ul>
        <li><strong>Closed</strong> - Requests are allowed to reach the service.</li>
        <li><strong>Open</strong> - Requests are blocked after repeated failures.</li>
        <li><strong>Half-Open</strong> - A limited number of requests are allowed to test if the service has recovered.</li>
    </ul>

    <p><strong>Implementation Example:</strong></p>

    <pre><code class="language-csharp">
builder.Services.AddHttpClient("PaymentAPI")
    .AddPolicyHandler(
        Policy
            .Handle&lt;Exception&gt;()
            .CircuitBreakerAsync(
                handledEventsAllowedBeforeBreaking: 3,
                durationOfBreak: TimeSpan.FromSeconds(30)));
    </code></pre>

    <p><strong>Architecture:</strong></p>

    <pre><code class="language-text">
Order Service
      │
      ▼
Circuit Breaker
      │
      ▼
Payment Service
    </code></pre>

    <p><strong>Real-Time Example:</strong></p>

    <p>
        In an e-commerce application, the Order Service calls the Payment
        Service. If the Payment Service fails three consecutive times, the
        Circuit Breaker opens and immediately rejects further requests for
        30 seconds. After that period, it enters the Half-Open state and
        allows a test request. If the request succeeds, the circuit closes;
        otherwise, it opens again.
    </p>

    <p><strong>Common Use Cases:</strong></p>

    <ul>
        <li>Payment Gateway integration.</li>
        <li>External REST APIs.</li>
        <li>Microservice-to-Microservice communication.</li>
        <li>Cloud applications.</li>
        <li>High-traffic distributed systems.</li>
    </ul>

    <div class="interview-answer">
        <strong>Interview One-Liner:</strong>
        A Circuit Breaker prevents cascading failures by temporarily stopping requests to an unhealthy service and automatically retrying after a recovery period.
    </div>
    `
},
"What is an API Gateway in Microservices?": {
    "answer": `
    <p>
        An <strong>API Gateway</strong> is a single entry point for all client
        requests in a microservices architecture. Instead of clients calling
        individual microservices directly, all requests pass through the API
        Gateway, which routes them to the appropriate service.
    </p>

    <p>
        The API Gateway also provides cross-cutting features such as
        authentication, authorization, rate limiting, request routing,
        caching, logging, and load balancing.
    </p>

    <p><strong>Responsibilities of an API Gateway:</strong></p>

    <ul>
        <li>Routes requests to the appropriate microservice.</li>
        <li>Handles authentication and authorization.</li>
        <li>Applies rate limiting and throttling.</li>
        <li>Provides centralized logging and monitoring.</li>
        <li>Aggregates responses from multiple services.</li>
        <li>Performs load balancing and request transformation.</li>
    </ul>

    <p><strong>Architecture:</strong></p>

    <pre><code class="language-text">
             Client
                │
                ▼
          API Gateway
                │
      ┌─────────┼─────────┐
      ▼         ▼         ▼
 Order API  Payment API  Inventory API
    </code></pre>

    <p><strong>Real-Time Example:</strong></p>

    <p>
        In an e-commerce application, the Angular application sends all
        requests to the API Gateway. The gateway authenticates the request,
        applies rate limiting, and routes it to the appropriate service such
        as Order, Payment, or Inventory. If the dashboard requires data from
        multiple services, the gateway can aggregate the responses into a
        single response for the client.
    </p>

    <p><strong>Common Use Cases:</strong></p>

    <ul>
        <li>Microservices architecture.</li>
        <li>Azure API Management (APIM).</li>
        <li>Ocelot API Gateway.</li>
        <li>YARP (Yet Another Reverse Proxy).</li>
        <li>Kubernetes Ingress.</li>
    </ul>

    <div class="interview-answer">
        <strong>Interview One-Liner:</strong>
        An API Gateway is a single entry point that routes client requests to the appropriate microservices while providing centralized security, routing, rate limiting, caching, logging, and monitoring.
    </div>
    `
},
"Inventory has been deducted but Payment fails. What will you do?": {
    "answer": `
    <p>
        In a Microservices architecture, a single database transaction cannot
        span multiple services. If inventory is deducted successfully but the
        payment fails, we cannot simply roll back the inventory using a SQL
        transaction because each service owns its own database.
    </p>

    <p>
        The recommended solution is to use the
        <strong>Saga Pattern</strong> with a
        <strong>Compensating Transaction</strong>.
    </p>

    <p><strong>Flow:</strong></p>

    <pre><code class="language-text">
Customer Places Order
        │
        ▼
Order Service
        │
        ▼
Inventory Service
(Deduct Stock)
        │
        ▼
Payment Service
        │
        ├── Success
        │      │
        │      ▼
        │ Notification Service
        │
        └── Failed
               │
               ▼
Publish InventoryRestore Event
               │
               ▼
Inventory Service
(Add Stock Back)
               │
               ▼
Order Status = Cancelled
    </code></pre>

    <p><strong>Compensating Transaction Example:</strong></p>

    <pre><code class="language-csharp">
// Payment Failed

await _serviceBus.PublishAsync(
    new InventoryRestoreEvent
    {
        ProductId = productId,
        Quantity = quantity
    });
    </code></pre>

    <p><strong>Inventory Service</strong></p>

    <pre><code class="language-csharp">
public async Task Handle(InventoryRestoreEvent message)
{
    inventory.Quantity += message.Quantity;

    await _repository.SaveAsync(inventory);
}
    </code></pre>

    <p><strong>Real-Time Example:</strong></p>

    <p>
        In an e-commerce application, if stock is reserved but the customer's
        payment is declined, the Payment Service publishes an
        InventoryRestore event. The Inventory Service consumes the event,
        restores the stock, and the Order Service marks the order as
        Cancelled. This keeps all services eventually consistent.
    </p>

    <div class="interview-answer">
        <strong>Interview One-Liner:</strong>
        I would use the Saga Pattern with compensating transactions. If payment
        fails after inventory deduction, the Payment Service publishes an
        InventoryRestore event, the Inventory Service restores the stock, and
        the Order Service updates the order status to Cancelled, ensuring
        eventual consistency.
    </div>
    `
},
};
