window.data = window.data || {};
window.data.microservices = {
  "Monolithic and Microservices Architecture?": {
    "answer": `
    <p>
        <strong>Monolithic Architecture</strong> and
        <strong>Microservices Architecture</strong> are two common approaches
        for designing software applications.
    </p>

    <p>
        In a <strong>Monolithic Architecture</strong>, the entire application is
        developed, deployed, and maintained as a single unit.
        In contrast, <strong>Microservices Architecture</strong> divides the
        application into multiple small, independent services, where each service
        is responsible for a specific business capability.
    </p>

    <p><strong>Architecture Comparison</strong></p>

    <pre><code class="language-text">
Monolithic Architecture

+--------------------------------------+
|            Application               |
|--------------------------------------|
| UI | Business Logic | Data Access    |
+--------------------------------------+
                │
                ▼
           Single Database


Microservices Architecture

+-----------+   +-----------+   +-----------+
| User Svc  |   | Order Svc |   | PaymentSvc|
+-----------+   +-----------+   +-----------+
      │               │               │
      ▼               ▼               ▼
 User DB         Order DB       Payment DB
    </code></pre>

    <p><strong>Monolithic Architecture</strong></p>

    <ul>
        <li>Single codebase.</li>
        <li>Single deployment unit.</li>
        <li>Typically uses a single database.</li>
        <li>Components are tightly coupled.</li>
        <li>Simple to develop and deploy for small applications.</li>
    </ul>

    <p><strong>Microservices Architecture</strong></p>

    <ul>
        <li>Application is split into multiple independent services.</li>
        <li>Each service focuses on one business capability.</li>
        <li>Services communicate through REST APIs or messaging.</li>
        <li>Each service can have its own database.</li>
        <li>Each service can be deployed and scaled independently.</li>
    </ul>

    <p><strong>Advantages of Microservices</strong></p>

    <ul>
        <li>Independent deployment.</li>
        <li>Independent scaling.</li>
        <li>Faster development by multiple teams.</li>
        <li>Better fault isolation.</li>
        <li>Technology flexibility for different services.</li>
    </ul>

    <p><strong>Disadvantages of Microservices</strong></p>

    <ul>
        <li>More complex architecture.</li>
        <li>Harder debugging and monitoring.</li>
        <li>Network communication overhead.</li>
        <li>Requires service discovery, API gateway, and centralized logging.</li>
    </ul>

    <p><strong>When to Use</strong></p>

    <ul>
        <li><strong>Monolithic</strong> - Small to medium applications, startups, simple deployment.</li>
        <li><strong>Microservices</strong> - Large enterprise applications requiring scalability and independent deployments.</li>
    </ul>

    <p><strong>Interview One-Liner:</strong></p>

    <div class="interview-answer">
        A Monolithic Architecture is a single deployable application where all
        components are tightly coupled, whereas a Microservices Architecture
        consists of multiple independent services that can be developed,
        deployed, and scaled independently while communicating through APIs.
    </div>
    `
},
"What is an API Gateway?": {
    "answer": `
    <p>
        An <strong>API Gateway</strong> is a single entry point for all client
        requests in a <strong>Microservices Architecture</strong>. Instead of
        clients communicating directly with multiple microservices, they send
        requests to the API Gateway, which routes the requests to the appropriate
        service.
    </p>

    <p>
        The API Gateway can also handle common cross-cutting concerns such as
        authentication, authorization, routing, load balancing, rate limiting,
        caching, logging, and request aggregation.
    </p>

    <p><strong>Architecture Flow</strong></p>

    <pre><code class="language-text">
            Client
              │
              ▼
        +-------------+
        | API Gateway |
        +-------------+
         │     │     │
         ▼     ▼     ▼
   User Service
   Order Service
   Payment Service
         │
         ▼
      Databases
    </code></pre>

    <p><strong>Responsibilities of an API Gateway</strong></p>

    <ul>
        <li>Routes requests to the appropriate microservice.</li>
        <li>Performs authentication and authorization.</li>
        <li>Implements rate limiting and throttling.</li>
        <li>Performs load balancing.</li>
        <li>Aggregates responses from multiple services.</li>
        <li>Logs requests and responses.</li>
        <li>Caches frequently requested data.</li>
        <li>Transforms requests and responses if required.</li>
    </ul>

    <p><strong>Benefits</strong></p>

    <ul>
        <li>Single entry point for clients.</li>
        <li>Hides internal microservice implementation.</li>
        <li>Reduces client complexity.</li>
        <li>Centralizes security and monitoring.</li>
        <li>Improves scalability and maintainability.</li>
    </ul>

    <p><strong>Common API Gateway Technologies</strong></p>

    <ul>
        <li>Ocelot (.NET)</li>
        <li>YARP (Yet Another Reverse Proxy)</li>
        <li>Azure API Management</li>
        <li>NGINX</li>
        <li>Kong</li>
        <li>AWS API Gateway</li>
    </ul>

    <p><strong>Real-Time Example</strong></p>

    <p>
        In an e-commerce application, when a user opens the dashboard,
        the API Gateway receives the request and internally calls the
        User Service, Order Service, and Payment Service. It combines
        the responses into a single response and returns it to the client,
        reducing multiple client-side API calls.
    </p>

    <p><strong>Interview One-Liner:</strong></p>

    <div class="interview-answer">
        An API Gateway is the single entry point for client requests in a
        microservices architecture. It routes requests to the appropriate
        services while handling authentication, routing, load balancing,
        caching, logging, and request aggregation.
    </div>
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
         <strong>Service Discovery</strong>  is a mechanism that enables one microservice to find the network location (IP address and port) of another microservice dynamically.
</br>
Instead of hardcoding URLs, services register themselves with a Service Registry, and clients query the registry to locate the required service.
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
"What is CQRS?": {
    "answer": `
    <p>
        <strong>CQRS (Command Query Responsibility Segregation)</strong> is a
        design pattern that separates the read and write operations of a system
        into different models. The main idea is to use one model for updating
        data (commands) and another model for reading data (queries).
    </p>

    <p><strong>How It Works:</strong></p>

    <ul>
        <li><strong>Command Model:</strong> Handles all write operations, such as creating, updating, or deleting data.</li>
        <li><strong>Query Model:</strong> Handles all read operations, optimized for retrieving data.</li>
    </ul>

    <p><strong>Architecture:</strong></p>

    <pre><code class="language-text">
          +-------------------+
          |   Command Model   |
          +-------------------+
          | Create / Update   |
          | Delete          |
          +-------------------+
                  │
                  ▼
          +-------------------+
          |   Query Model     |
          +-------------------+
          | Read Operations   |
          +-------------------+
    </code></pre>

    <p><strong>Benefits:</strong></p>

    <ul>
        <li>Improved performance and scalability by optimizing read and write models separately.</li>
        <li>Clear separation of concerns, making the system easier to maintain.</li>
        <li>Supports complex business logic in the command model without affecting read performance.</li>
        <li>Enables event sourcing and eventual consistency.</li>
    </ul>

    <p><strong>Real-Time Example:</strong></p>

    <p>
        In an e-commerce application, the Order Service can use a command model to handle order creation and updates, while a separate query model can be used to retrieve order details for display in the user interface. This allows for optimized read performance without impacting the write operations.
    </p>

    <div class="interview-answer">
        <strong>Interview One-Liner:</strong>
        CQRS is a design pattern that separates read and write operations into different models, allowing for optimized performance, scalability, and clear separation of concerns.
    </div>
    `
},
};
