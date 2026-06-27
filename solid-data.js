window.data = window.data || {};
window.data.solid = {
  "What is SRP?": {
    "answer": `
<h3>Answer</h3>
<p>
SRP stands for Single Responsibility Principle, which means a class should have only one reason to change.
</p>
`
  },
  "What is OCP?": {
    "answer": `
<h3>Answer</h3>
<p>
OCP stands for Open Closed Principle, which means software entities should be open for extension but closed for modification.
</p>
`
  },
  "Liskov Substitution Principle (LSP)": {
    "answer": `
    <p>
        <strong>Liskov Substitution Principle (LSP)</strong> states that a
        derived (child) class should be able to replace its base (parent)
        class without changing the correctness or behavior of the application.
    </p>

    <p>
        In simple terms, if a class inherits from another class, it should
        behave like the parent class and should not break the existing
        functionality.
    </p>

    <p><strong>Real-Life Example:</strong></p>

    <p>
        If you know how to drive a car, you should be able to drive a
        <strong>Honda</strong>, <strong>Toyota</strong>, or
        <strong>Hyundai</strong> without learning a new way of driving.
        Each car can replace another because they all follow the same behavior.
    </p>

    <p><strong>Implementation Example:</strong></p>

    <pre><code class="language-csharp">
public abstract class Payment
{
    public abstract void Pay(decimal amount);
}

public class CreditCardPayment : Payment
{
    public override void Pay(decimal amount)
    {
        Console.WriteLine("Paid using Credit Card");
    }
}

public class UPIPayment : Payment
{
    public override void Pay(decimal amount)
    {
        Console.WriteLine("Paid using UPI");
    }
}
    </code></pre>

    <pre><code class="language-csharp">
Payment payment = new CreditCardPayment();
payment.Pay(1000);

payment = new UPIPayment();
payment.Pay(1000);
    </code></pre>

    <p>
        Both <strong>CreditCardPayment</strong> and
        <strong>UPIPayment</strong> can replace the
        <strong>Payment</strong> class without changing the client code.
        This follows the Liskov Substitution Principle.
    </p>

    <p><strong>Real-Time Example:</strong></p>

    <p>
        In an e-commerce application, multiple payment methods such as
        Credit Card, UPI, and PayPal implement the same payment contract.
        The checkout process works with the base Payment type, so new payment
        methods can be introduced without changing the checkout logic.
    </p>

    <p><strong>Common Use Cases:</strong></p>

    <ul>
        <li>Payment Gateway implementations.</li>
        <li>Notification providers (Email, SMS, Push).</li>
        <li>Storage providers (Local, Azure Blob, AWS S3).</li>
        <li>Logging providers.</li>
    </ul>

    <div class="interview-answer">
        <strong>Interview One-Liner:</strong>
        Liskov Substitution Principle states that any child class should be able to replace its parent class without changing the application's behavior or breaking existing functionality.
    </div>
    `
},
  "What is ISP?": {
    "answer": `
<h3>Answer</h3>
<p>
ISP stands for Interface Segregation Principle, which recommends keeping interfaces focused and client-specific.
</p>
`
  },
  "What is DIP?": {
    "answer": `
<h3>Answer</h3>
<p>
DIP stands for Dependency Inversion Principle, which suggests depending on abstractions rather than concrete implementations.
</p>
`
  },
  "SOLID Principles with Real-Life Examples": {
    "answer": `
    <p>
        <strong>SOLID</strong> is a set of five object-oriented design principles
        that help developers build software that is maintainable, scalable,
        flexible, and easy to test.
    </p>

    <p><strong>S - Single Responsibility Principle (SRP)</strong></p>

    <p>
        A class should have only <strong>one responsibility</strong> or one reason
        to change.
    </p>

    <p><strong>Real-Life Example:</strong></p>

    <p>
        A <strong>Teacher</strong> teaches students, while the
        <strong>Account Department</strong> manages salaries.
        A teacher should not be responsible for payroll.
    </p>

    <hr>

    <p><strong>O - Open/Closed Principle (OCP)</strong></p>

    <p>
        Software entities should be <strong>open for extension</strong> but
        <strong>closed for modification</strong>.
    </p>

    <p><strong>Real-Life Example:</strong></p>

    <p>
        A mobile phone charger works with different mobile brands.
        You can buy a new phone without changing the charger design.
        The system is extended without modifying the existing charger.
    </p>

    <hr>

    <p><strong>L - Liskov Substitution Principle (LSP)</strong></p>

    <p>
        A derived class should be able to replace its base class without
        changing the application's behavior.
    </p>

    <p><strong>Real-Life Example:</strong></p>

    <p>
        Any car can be driven by someone who knows how to drive.
        Whether it's a Honda or a Toyota, the driver should not need to
        change the way they drive.
    </p>

    <hr>

    <p><strong>I - Interface Segregation Principle (ISP)</strong></p>

    <p>
        Clients should not be forced to implement methods they do not use.
    </p>

    <p><strong>Real-Life Example:</strong></p>

    <p>
        A printer should not be forced to support scanning or faxing.
        A simple printer should only implement printing functionality.
    </p>

    <hr>

    <p><strong>D - Dependency Inversion Principle (DIP)</strong></p>

    <p>
        High-level modules should depend on abstractions rather than concrete
        implementations.
    </p>

    <p><strong>Real-Life Example:</strong></p>

    <p>
        A person plugs a laptop into any compatible power socket without
        knowing how electricity is generated. The laptop depends on the
        power interface, not on the power plant.
    </p>

    <div class="interview-answer">
        <strong>Interview One-Liner:</strong>
        SOLID principles help build maintainable, loosely coupled, scalable,
        and easily testable applications by following five object-oriented
        design principles.
    </div>
    `
},
"Repository Design Pattern in ASP.NET Core": {
    "answer": `
    <p>
        The <strong>Repository Pattern</strong> is a design pattern that
        acts as an abstraction layer between the Business Logic and the
        Data Access Layer. It encapsulates all database operations,
        making the application easier to maintain, test, and extend.
    </p>

    <p>
        Instead of accessing Entity Framework directly from controllers,
        controllers interact with a repository interface, which hides the
        underlying data access implementation.
    </p>

    <p><strong>Implementation Steps:</strong></p>

    <ul>
        <li>Create a repository interface.</li>
        <li>Implement the repository using Entity Framework Core.</li>
        <li>Register the repository in Dependency Injection.</li>
        <li>Inject the repository into services or controllers.</li>
    </ul>

    <p><strong>Implementation Example:</strong></p>

    <pre><code class="language-csharp">
// Repository Interface
public interface IEmployeeRepository
{
    Task&lt;Employee&gt; GetByIdAsync(int id);
    Task AddAsync(Employee employee);
}
    </code></pre>

    <pre><code class="language-csharp">
// Repository Implementation
public class EmployeeRepository : IEmployeeRepository
{
    private readonly AppDbContext _context;

    public EmployeeRepository(AppDbContext context)
    {
        _context = context;
    }

    public async Task&lt;Employee&gt; GetByIdAsync(int id)
    {
        return await _context.Employees.FindAsync(id);
    }

    public async Task AddAsync(Employee employee)
    {
        _context.Employees.Add(employee);
        await _context.SaveChangesAsync();
    }
}
    </code></pre>

    <pre><code class="language-csharp">
// Register DI
builder.Services.AddScoped&lt;IEmployeeRepository, EmployeeRepository&gt;();
    </code></pre>

    <p><strong>Real-Time Example:</strong></p>

    <p>
        In an Employee Management System, the controller calls
        <strong>IEmployeeRepository</strong> instead of directly using
        Entity Framework. If the data source changes from SQL Server
        to another database, only the repository implementation changes,
        while the controller and business logic remain unchanged.
    </p>

    <p><strong>Common Use Cases:</strong></p>

    <ul>
        <li>ASP.NET Core Web APIs.</li>
        <li>Entity Framework Core applications.</li>
        <li>Microservices.</li>
        <li>Applications requiring unit testing.</li>
    </ul>

    <div class="interview-answer">
        <strong>Interview One-Liner:</strong>
        Repository Pattern separates business logic from data access by encapsulating database operations behind an interface, improving maintainability, testability, and flexibility.
    </div>
    `
},
"Clean Architecture in ASP.NET Core": {
    "answer": `
    <p>
        <strong>Clean Architecture</strong> is a software architecture pattern
        that separates an application into independent layers with clear
        responsibilities. The main goal is to keep the business logic
        independent of frameworks, databases, and user interfaces.
    </p>

    <p><strong>Layers of Clean Architecture:</strong></p>

    <ul>
        <li><strong>Domain Layer</strong> - Contains Entities, Business Rules and Interfaces.</li>
        <li><strong>Application Layer</strong> - Contains Use Cases, DTOs, Services and Business Logic.</li>
        <li><strong>Infrastructure Layer</strong> - Contains Entity Framework Core, Repository Implementations, External APIs and Database access.</li>
        <li><strong>Presentation Layer</strong> - ASP.NET Core Web API, Controllers and UI.</li>
    </ul>

    <p><strong>Architecture Diagram:</strong></p>

    <pre><code class="language-text">
Presentation (API)
        │
        ▼
Application Layer
        │
        ▼
Domain Layer
        ▲
        │
Infrastructure Layer
    </code></pre>

    <p><strong>Dependency Rule:</strong></p>

    <p>
        Dependencies always point inward. The Domain layer does not depend on
        any other layer. Infrastructure depends on the Application and Domain
        layers to provide implementations.
    </p>

    <p><strong>Real-Time Example:</strong></p>

    <p>
        In an Employee Management System, the API Controller receives the
        request and calls the Application layer. The Application layer applies
        business rules and calls a repository interface. The Infrastructure
        layer implements the repository using Entity Framework Core and SQL
        Server. If the database changes from SQL Server to Oracle, only the
        Infrastructure layer changes while the business logic remains unchanged.
    </p>

    <p><strong>Common Use Cases:</strong></p>

    <ul>
        <li>Enterprise applications.</li>
        <li>Microservices.</li>
        <li>Banking systems.</li>
        <li>E-commerce platforms.</li>
        <li>Large ASP.NET Core Web APIs.</li>
    </ul>

    <div class="interview-answer">
        <strong>Interview One-Liner:</strong>
        Clean Architecture separates an application into Domain, Application, Infrastructure, and Presentation layers, ensuring that business logic remains independent of databases, frameworks, and UI technologies.
    </div>
    `
},
"Singleton Design Pattern in C#": {
    "answer": `
    <p>
        The <strong>Singleton Design Pattern</strong> ensures that a class has
        <strong>only one instance</strong> throughout the application's lifetime
        and provides a global point of access to that instance.
    </p>

    <p><strong>Characteristics:</strong></p>

    <ul>
        <li>Only one object is created.</li>
        <li>Global access to the object.</li>
        <li>Private constructor prevents external instantiation.</li>
        <li>Static property returns the single instance.</li>
    </ul>

    <p><strong>Thread-Safe Singleton Example</strong></p>

    <pre><code class="language-csharp">
public sealed class Logger
{
    private static readonly Lazy&lt;Logger&gt; _instance =
        new Lazy&lt;Logger&gt;(() => new Logger());

    public static Logger Instance => _instance.Value;

    private Logger()
    {
    }

    public void Log(string message)
    {
        Console.WriteLine(message);
    }
}
    </code></pre>

    <p><strong>Usage</strong></p>

    <pre><code class="language-csharp">
Logger.Instance.Log("Application Started");
Logger.Instance.Log("User Logged In");
    </code></pre>

    <p><strong>Real-Time Example:</strong></p>

    <p>
        A logging service is shared by the entire application.
        Instead of creating multiple Logger objects, a Singleton
        ensures that all components use the same logging instance.
    </p>

    <p><strong>Common Use Cases:</strong></p>

    <ul>
        <li>Logging.</li>
        <li>Configuration Manager.</li>
        <li>Cache Manager.</li>
        <li>Application Settings.</li>
        <li>Memory Cache.</li>
    </ul>

    <div class="interview-answer">
        <strong>Interview One-Liner:</strong>
        Singleton ensures that only one instance of a class exists and provides
        a global access point to that instance.
    </div>
    `
},
"Factory Design Pattern in C#": {
    "answer": `
    <p>
        The <strong>Factory Design Pattern</strong> is a Creational Design
        Pattern that creates objects without exposing the object creation
        logic to the client. Instead of using the <code>new</code> keyword
        directly, the client requests an object from a Factory class.
    </p>

    <p><strong>Advantages:</strong></p>

    <ul>
        <li>Encapsulates object creation.</li>
        <li>Reduces tight coupling.</li>
        <li>Makes code easier to maintain and extend.</li>
        <li>Supports the Open/Closed Principle.</li>
    </ul>

    <p><strong>Step 1 - Create Interface</strong></p>

    <pre><code class="language-csharp">
public interface INotification
{
    void Send();
}
    </code></pre>

    <p><strong>Step 2 - Implement Classes</strong></p>

    <pre><code class="language-csharp">
public class EmailNotification : INotification
{
    public void Send()
    {
        Console.WriteLine("Email Sent");
    }
}

public class SmsNotification : INotification
{
    public void Send()
    {
        Console.WriteLine("SMS Sent");
    }
}
    </code></pre>

    <p><strong>Step 3 - Create Factory</strong></p>

    <pre><code class="language-csharp">
public class NotificationFactory
{
    public static INotification Create(string type)
    {
        return type.ToLower() switch
        {
            "email" => new EmailNotification(),
            "sms" => new SmsNotification(),
            _ => throw new ArgumentException("Invalid notification type")
        };
    }
}
    </code></pre>

    <p><strong>Step 4 - Client Code</strong></p>

    <pre><code class="language-csharp">
INotification notification =
    NotificationFactory.Create("email");

notification.Send();
    </code></pre>

    <p><strong>Real-Time Example:</strong></p>

    <p>
        In an e-commerce application, different notification providers
        (Email, SMS, Push Notification) can be created through a Factory
        without changing the client code.
    </p>

    <div class="interview-answer">
        <strong>Interview One-Liner:</strong>
        The Factory Pattern centralizes object creation and returns objects
        through a common interface without exposing the creation logic to
        the client.
    </div>
    `
},
"Explain Design Patterns. Which Design Patterns have you used in your application?": {
    "answer": `
    <p>
        A <strong>Design Pattern</strong> is a proven and reusable solution to
        commonly occurring software design problems. It is not a ready-made code,
        but a best practice or template that helps developers build applications
        that are maintainable, scalable, loosely coupled, and easy to test.
    </p>

    <p><strong>Design Pattern Categories</strong></p>

    <pre><code class="language-text">
Design Patterns
      │
      ├── Creational
      │      ├── Singleton
      │      ├── Factory
      │      └── Builder
      │
      ├── Structural
      │      ├── Adapter
      │      ├── Facade
      │      └── Decorator
      │
      └── Behavioral
             ├── Observer
             ├── Strategy
             └── Command
    </code></pre>

    <p><strong>Design Patterns I Have Used</strong></p>

    <ul>
        <li>Repository Pattern</li>
        <li>Dependency Injection (DI)</li>
        <li>Singleton Pattern</li>
        <li>Factory Pattern</li>
        <li>Observer Pattern (RxJS Observables)</li>
        <li>Mediator Pattern (MediatR in .NET Core, if applicable)</li>
    </ul>

    <p><strong>Real-Time Examples</strong></p>

    <ul>
        <li><strong>Repository Pattern</strong> - Used to separate business logic from data access.</li>
        <li><strong>Dependency Injection</strong> - Used to inject services into controllers and components.</li>
        <li><strong>Singleton Pattern</strong> - Used for services like logging, configuration, and caching.</li>
        <li><strong>Factory Pattern</strong> - Used to create objects based on runtime conditions.</li>
        <li><strong>Observer Pattern</strong> - Used in Angular with RxJS Observables and Subjects.</li>
    </ul>

    <p><strong>Benefits</strong></p>

    <ul>
        <li>Promotes code reusability.</li>
        <li>Reduces tight coupling.</li>
        <li>Improves maintainability.</li>
        <li>Makes applications easier to test.</li>
        <li>Supports scalable application architecture.</li>
    </ul>

    <p><strong>Interview One-Liner:</strong></p>

    <div class="interview-answer">
        Design patterns are reusable solutions to common software design problems.
        In my projects, I have primarily used Repository Pattern, Dependency Injection,
        Singleton, Factory, and the Observer Pattern with RxJS in Angular.
    </div>
    `
},
};
