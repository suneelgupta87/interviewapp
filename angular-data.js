window.data = window.data || {};
window.data.angular = {
  "What is Angular?": {
    "answer": `
    <p>
        <strong>Angular</strong> is an open-source, TypeScript-based front-end
        framework developed and maintained by <strong>Google</strong> for building
        dynamic, scalable, and high-performance Single Page Applications (SPAs).
    </p>

    <p>
        It follows a <strong>component-based architecture</strong>, where the UI is
        divided into reusable components. Angular also provides built-in features
        like routing, dependency injection, forms, HTTP client, and state management,
        making it suitable for enterprise-level applications.
    </p>

    <p><strong>Angular Architecture</strong></p>

    <pre><code class="language-text">
Application
      │
      ▼
Modules
      │
      ▼
Components
      │
      ▼
Templates + Styles
      │
      ▼
Services
      │
      ▼
Backend APIs
    </code></pre>

    <p><strong>Key Features</strong></p>

    <ul>
        <li>Component-based architecture.</li>
        <li>Two-way and one-way data binding.</li>
        <li>Dependency Injection (DI).</li>
        <li>Powerful Routing with Lazy Loading.</li>
        <li>RxJS and Observables for asynchronous programming.</li>
        <li>Reactive and Template-driven Forms.</li>
        <li>Built-in HTTP Client.</li>
        <li>Directives and Pipes.</li>
        <li>Angular CLI for development, build, and deployment.</li>
        <li>Supports Server-Side Rendering (SSR) and Progressive Web Apps (PWA).</li>
    </ul>

    <p><strong>Advantages</strong></p>

    <ul>
        <li>Suitable for large-scale enterprise applications.</li>
        <li>Strong TypeScript support.</li>
        <li>High code reusability.</li>
        <li>Built-in security features.</li>
        <li>Excellent tooling with Angular CLI.</li>
    </ul>

    <p><strong>Interview One-Liner:</strong></p>

    <div class="interview-answer">
        Angular is a TypeScript-based front-end framework developed by Google
        for building scalable, component-based Single Page Applications with
        built-in features like routing, dependency injection, forms, and HTTP services.
    </div>
    `
},
  "What is an Angular Component?": {
    "answer": `
    <p>
        An <strong>Angular Component</strong> is the fundamental building block
        of an Angular application. A component controls a portion of the user
        interface (UI) by combining HTML, CSS, and TypeScript into a reusable
        unit.
    </p>

    <p><strong>Component Structure:</strong></p>

    <ul>
        <li><strong>HTML</strong> - Defines the UI.</li>
        <li><strong>CSS/SCSS</strong> - Defines the styling.</li>
        <li><strong>TypeScript</strong> - Contains the business logic.</li>
        <li><strong>@Component</strong> - Decorator that provides metadata.</li>
    </ul>

    <p><strong>Example Component</strong></p>

    <pre><code class="language-typescript">
import { Component } from '@angular/core';

@Component({
    selector: 'app-employee',
    templateUrl: './employee.component.html',
    styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

    title = "Employee Management";

    showMessage()
    {
        alert("Welcome");
    }
}
    </code></pre>

    <p><strong>HTML Template</strong></p>

    <pre><code class="language-html">
<h2>{{title}}</h2>

<button (click)="showMessage()">
    Click Me
</button>
    </code></pre>

    <p><strong>Component Lifecycle</strong></p>

    <pre><code class="language-text">
Application Starts
        │
        ▼
Component Created
        │
        ▼
ngOnInit()
        │
        ▼
User Interaction
        │
        ▼
ngOnDestroy()
    </code></pre>

    <p><strong>Real-Time Example:</strong></p>

    <p>
        In an Employee Management System, separate components can be created
        for Employee List, Employee Details, Add Employee, Login, and Dashboard.
        Each component is responsible for its own UI and business logic,
        making the application modular and reusable.
    </p>

    <div class="interview-answer">
        <strong>Interview One-Liner:</strong>
        An Angular Component is a reusable UI building block that combines
        HTML, CSS, and TypeScript to display data, handle user interactions,
        and implement business logic.
    </div>
    `
},
"What are Components and Directives in Angular?": {
    "answer": `
    <p>
        <strong>Components</strong> and <strong>Directives</strong> are the
        fundamental building blocks of Angular applications.
        A <strong>Component</strong> controls a part of the user interface,
        whereas a <strong>Directive</strong> changes the appearance or behavior
        of existing DOM elements without creating its own view.
    </p>

    <p><strong>Relationship</strong></p>

    <pre><code class="language-text">
Angular Application
        │
        ▼
    Components
        │
        ▼
    HTML Template
        │
        ▼
    Directives
        │
        ▼
Modify DOM Behavior
    </code></pre>

    <p><strong>Component Example</strong></p>

    <pre><code class="language-typescript">
@Component({
  selector: 'app-user',
  template: '<h2>{{name}}</h2>'
})
export class UserComponent {
  name = 'John';
}
    </code></pre>

    <p><strong>Directive Example</strong></p>

    <pre><code class="language-html">
<div *ngIf="isLoggedIn">
  Welcome User
</div>

<li *ngFor="let user of users">
  {{user.name}}
</li>

<div [ngClass]="{'active': isActive}">
  Profile
</div>
    </code></pre>

    <p><strong>Types of Directives</strong></p>

    <ul>
        <li><strong>Component Directive</strong> – A directive with its own template.</li>
        <li><strong>Structural Directive</strong> – Adds or removes elements from the DOM (e.g., *ngIf, *ngFor, *ngSwitch).</li>
        <li><strong>Attribute Directive</strong> – Changes the appearance or behavior of an existing element (e.g., ngClass, ngStyle).</li>
    </ul>

    <p><strong>Component vs Directive</strong></p>

    <ul>
        <li>Component has its own HTML template; Directive does not.</li>
        <li>Component controls a portion of the UI; Directive modifies existing elements.</li>
        <li>Every Component is a Directive, but not every Directive is a Component.</li>
        <li>A Component uses the <strong>@Component</strong> decorator, while a Directive uses the <strong>@Directive</strong> decorator.</li>
    </ul>

    <p><strong>Interview One-Liner:</strong></p>

    <div class="interview-answer">
        A Component is a special type of Directive with its own template used to
        build the UI, whereas a Directive modifies the behavior or appearance of
        existing DOM elements without having its own view.
    </div>
    `
},
"What is Routing in Angular?": {
    "answer": `
    <p>
        <strong>Routing</strong> in Angular is a mechanism that enables navigation
        between different components or views without reloading the entire page.
        It allows Angular applications to behave as
        <strong>Single Page Applications (SPAs)</strong>, where only the required
        component is loaded while the browser URL changes.
    </p>

    <p><strong>Routing Flow</strong></p>

    <pre><code class="language-text">
User Clicks Link
      │
      ▼
Angular Router
      │
      ▼
Matches Route
      │
      ▼
Loads Component
      │
      ▼
Updates Browser URL
      │
      ▼
View Rendered
    </code></pre>

    <p><strong>Route Configuration</strong></p>

    <pre><code class="language-typescript">
const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'products',
    component: ProductsComponent
  },

  {
    path: 'orders',
    component: OrdersComponent
  },

  {
    path: '**',
    component: PageNotFoundComponent
  }

];
    </code></pre>

    <p><strong>Router Outlet</strong></p>
<pre><code class="language-html">
&lt;router-outlet&gt;&lt;/router-outlet&gt;
</code></pre>


    <p><strong>Navigation</strong></p>

    <pre><code class="language-html">
&lt;a routerLink="/products"&gt;
    Products
</a>
    </code></pre>

    <pre><code class="language-typescript">
this.router.navigate(['/products']);
    </code></pre>

    <p><strong>Features of Angular Routing</strong></p>

    <ul>
        <li>Navigation without page refresh.</li>
        <li>Supports Lazy Loading for feature modules.</li>
        <li>Supports Route Guards for authentication and authorization.</li>
        <li>Supports Route Parameters for dynamic URLs.</li>
        <li>Supports Child (Nested) Routes.</li>
        <li>Supports Query Parameters and URL Fragments.</li>
        <li>Supports Redirects and Wildcard Routes.</li>
    </ul>

    <p><strong>Common Route Types</strong></p>

    <ul>
        <li><strong>Static Route</strong> - /home</li>
        <li><strong>Parameterized Route</strong> - /product/:id</li>
        <li><strong>Child Route</strong> - /admin/users</li>
        <li><strong>Lazy Loaded Route</strong> - Loads module only when required.</li>
        <li><strong>Wildcard Route</strong> - ** (Page Not Found)</li>
    </ul>

    <p><strong>Best Practices</strong></p>

    <ul>
        <li>Use lazy loading for feature modules.</li>
        <li>Protect routes using Route Guards.</li>
        <li>Keep routing configuration modular.</li>
        <li>Use route parameters instead of hardcoded values.</li>
        <li>Handle invalid URLs using wildcard routes.</li>
    </ul>

    <p><strong>Interview One-Liner:</strong></p>

    <div class="interview-answer">
        Angular Routing enables navigation between components without reloading
        the page. It manages URL changes, loads the appropriate components,
        and supports features like lazy loading, route guards, child routes,
        and parameterized routing.
    </div>
    `
},
"How do Components communicate in Angular?": {
    "answer": `
    <p>
        <strong>Component Communication</strong> is the process of sharing data
        between Angular components. The communication method depends on the
        relationship between the components, such as Parent-Child, Child-Parent,
        Sibling, or Unrelated Components.
    </p>

    <p><strong>Component Communication Flow</strong></p>

    <pre><code class="language-text">
                    Parent Component
                    /             \\
                   /               \\
            @Input()           @Output()
                 ↓                  ↑
          Child Component  ─────────┘

Sibling Component A
        │
        ▼
Shared Service (RxJS Subject/BehaviorSubject)
        ▲
        │
Sibling Component B
    </code></pre>

    <p><strong>1. Parent to Child - @Input()</strong></p>

    <pre><code class="language-typescript">
// Parent Component
message = 'Hello Angular';
    </code></pre>

    <pre><code class="language-html">
&lt;app-child [message]="message"&gt;&lt;/app-child&gt;
    </code></pre>

    <pre><code class="language-typescript">
// Child Component
@Input() message!: string;
    </code></pre>

    <p><strong>2. Child to Parent - @Output()</strong></p>

    <pre><code class="language-typescript">
// Child Component
@Output() save = new EventEmitter&lt;string&gt;();

saveData() {
   this.save.emit('Data Saved');
}
    </code></pre>

    <pre><code class="language-html">
&lt;app-child (save)="onSave($event)"&gt;&lt;/app-child&gt;
    </code></pre>

    <p><strong>3. Sibling Components</strong></p>

    <p>
        Sibling components communicate using a shared service with
        <strong>Subject</strong> or <strong>BehaviorSubject</strong>.
    </p>

    <pre><code class="language-typescript">
@Injectable({ providedIn: 'root' })

export class MessageService {

  private message =
      new BehaviorSubject&lt;string&gt;('');

  message$ = this.message.asObservable();

  send(message: string) {
      this.message.next(message);
  }

}
    </code></pre>

    <p><strong>4. Unrelated Components</strong></p>

    <ul>
        <li>Shared Service with RxJS Subject/BehaviorSubject</li>
        <li>NgRx Store (Large Applications)</li>
        <li>Signals (Angular 16+)</li>
    </ul>

    <p><strong>When to Use</strong></p>

    <ul>
        <li><strong>@Input()</strong> - Parent to Child</li>
        <li><strong>@Output()</strong> - Child to Parent</li>
        <li><strong>Shared Service</strong> - Sibling Components</li>
        <li><strong>NgRx / Signals</strong> - Application-wide State</li>
    </ul>

    <p><strong>Best Practices</strong></p>

    <ul>
        <li>Use @Input() and @Output() for direct parent-child communication.</li>
        <li>Use a shared service for sibling components.</li>
        <li>Use NgRx or Signals for complex application state.</li>
        <li>Avoid excessive nested component communication.</li>
        <li>Keep components loosely coupled.</li>
    </ul>

    <p><strong>Interview One-Liner:</strong></p>

    <div class="interview-answer">
        Angular components communicate using
        <strong>@Input()</strong> for Parent-to-Child,
        <strong>@Output()</strong> for Child-to-Parent,
        a <strong>Shared Service</strong> with RxJS for Sibling Components,
        and <strong>NgRx or Signals</strong> for application-wide state management.
    </div>
    `
},
"What is Dependency Injection (DI) in Angular?": {
    "answer": `
    <p>
        <strong>Dependency Injection (DI)</strong> is a design pattern used by Angular
        to provide required dependencies (such as services) to components,
        directives, pipes, and other services instead of creating them manually.
    </p>

    <p>
        Angular uses an <strong>Injector</strong> to create and manage service
        instances, promoting loose coupling, code reusability, and easier testing.
    </p>

    <p><strong>Dependency Injection Flow</strong></p>

    <pre><code class="language-text">
Component
      │
      ▼
Requests Service
      │
      ▼
Angular Injector
      │
      ▼
Creates (if not available)
or Reuses Existing Instance
      │
      ▼
Injects Service
      │
      ▼
Component Uses Service
    </code></pre>

    <p><strong>Service Example</strong></p>

    <pre><code class="language-typescript">
@Injectable({
  providedIn: 'root'
})
export class UserService {

  getUsers() {
    return ['John', 'David'];
  }

}
    </code></pre>

    <p><strong>Injecting the Service</strong></p>

    <pre><code class="language-typescript">
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent {

  constructor(private userService: UserService) {}

  users = this.userService.getUsers();

}
    </code></pre>

    <p><strong>Provider Scopes</strong></p>

    <ul>
        <li><strong>providedIn: 'root'</strong> - Creates a singleton service shared across the application.</li>
        <li><strong>Component Providers</strong> - Creates a new instance for each component.</li>
        <li><strong>Feature Module Providers</strong> - Creates an instance scoped to that module (for NgModule-based apps).</li>
    </ul>

    <p><strong>Advantages</strong></p>

    <ul>
        <li>Loose coupling between components and services.</li>
        <li>Improves code reusability.</li>
        <li>Makes unit testing easier using mock services.</li>
        <li>Supports singleton services.</li>
        <li>Centralized object creation and lifecycle management.</li>
    </ul>

    <p><strong>Interview One-Liner:</strong></p>

    <div class="interview-answer">
        Dependency Injection is a design pattern in Angular where the framework's
        Injector automatically provides required service instances to components
        or other classes, reducing tight coupling and improving maintainability.
    </div>
    `
},
"Explain Angular MVVM Architecture": {
    "answer": `
    <p>
        Angular follows the <strong>MVVM (Model-View-ViewModel)</strong>
        architectural pattern. In this pattern, the Component acts as the
        <strong>ViewModel</strong>, connecting the View (HTML) with the Model
        (application data).
    </p>

    <p><strong>MVVM Architecture</strong></p>

    <pre><code class="language-text">
          Model
      (Business Data)
            ▲
            │
            │
      ViewModel
 (Angular Component)
            │
            ▼
          View
      (HTML Template)
    </code></pre>

    <p><strong>Responsibilities</strong></p>

    <ul>
        <li><strong>Model</strong> - Business data, API models, interfaces and services.</li>
        <li><strong>View</strong> - HTML template displayed to the user.</li>
        <li><strong>ViewModel</strong> - Angular Component that handles presentation logic and data binding.</li>
    </ul>

    <p><strong>Example</strong></p>

    <pre><code class="language-typescript">
export class EmployeeComponent
{
    employee =
    {
        id:1,
        name:'John',
        salary:50000
    };

    increaseSalary()
    {
        this.employee.salary += 5000;
    }
}
    </code></pre>

    <pre><code class="language-html">
<h2>{{employee.name}}</h2>

<p>Salary : {{employee.salary}}</p>

<button (click)="increaseSalary()">
Increase Salary
</button>
    </code></pre>

    <p><strong>Data Flow</strong></p>

    <pre><code class="language-text">
API
 │
 ▼
Model
 │
 ▼
Component (ViewModel)
 │
 ▼
HTML View
 │
 ▼
User Click
 │
 ▼
Component Updates Model
 │
 ▼
Angular Updates UI Automatically
    </code></pre>

    <p><strong>Real-Time Example:</strong></p>

    <p>
        In an Employee Management application, the Employee Service retrieves
        employee data from a Web API. The Employee Component receives the data,
        exposes it to the HTML template, and handles user actions such as
        updating employee information. The HTML template displays the data
        using Angular data binding.
    </p>

    <div class="interview-answer">
        <strong>Interview One-Liner:</strong>
        Angular follows the MVVM pattern where the Component acts as the
        ViewModel, connecting the View (HTML) with the Model and handling
        presentation logic through Angular's data binding.
    </div>
    `
},
"Diff b/w NgModule and Standalone Components?": {
    "answer": `
    <p>
        Before Angular 14, every component had to be declared inside an
        <strong>NgModule</strong>. Starting with Angular 14, Angular introduced
        <strong>Standalone Components</strong>, allowing components, directives,
        and pipes to work independently without being declared in an NgModule.
    </p>

    <p><strong>NgModule Example</strong></p>

    <pre><code class="language-typescript">
@NgModule({
  declarations: [EmployeeComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
    </code></pre>

    <p><strong>Standalone Component Example</strong></p>

    <pre><code class="language-typescript">
@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee.component.html'
})
export class EmployeeComponent {}
    </code></pre>

    <p><strong>Key Differences:</strong></p>

    <table border="1" cellpadding="5">
      <tr>
        <th>NgModule</th>
        <th>Standalone Component</th>
      </tr>
      <tr>
        <td>Requires AppModule or Feature Module.</td>
        <td>No module required.</td>
      </tr>
      <tr>
        <td>Components are declared in declarations array.</td>
        <td>Component is self-contained.</td>
      </tr>
      <tr>
        <td>Imports are managed by the module.</td>
        <td>Each component imports its own dependencies.</td>
      </tr>
      <tr>
        <td>More boilerplate code.</td>
        <td>Less boilerplate and simpler structure.</td>
      </tr>
      <tr>
        <td>Suitable for legacy Angular applications.</td>
        <td>Recommended for new Angular applications.</td>
      </tr>
    </table>

    <p><strong>Interview One-Liner:</strong></p>

    <div class="interview-answer">
        Standalone Components remove the dependency on NgModules by allowing
        components to manage their own imports, making Angular applications
        simpler, more modular, and easier to maintain.
    </div>
    `
},
"How does Angular Bootstrapping Process Work Internally?": {
    "answer": `
    <p>
        <strong>Bootstrapping</strong> is the process of starting an Angular
        application. During bootstrapping, Angular initializes the application,
        creates the root injector, loads the root component, renders the UI,
        and starts change detection.
    </p>

    <p><strong>Bootstrapping Flow</strong></p>

    <pre><code class="language-text">
Browser
    │
    ▼
main.ts
    │
    ▼
bootstrapApplication()
or bootstrapModule()
    │
    ▼
Create Root Injector
    │
    ▼
Initialize Services
    │
    ▼
Create Root Component
    │
    ▼
Render HTML
    │
    ▼
Start Change Detection
    </code></pre>

    <p><strong>Angular 16+ (Standalone)</strong></p>

    <pre><code class="language-typescript">
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent);
    </code></pre>

    <p><strong>Angular (NgModule)</strong></p>

    <pre><code class="language-typescript">
platformBrowserDynamic()
    .bootstrapModule(AppModule);
    </code></pre>

    <p><strong>Internal Steps:</strong></p>

    <ul>
        <li>Load main.ts.</li>
        <li>Create Angular platform.</li>
        <li>Create Dependency Injection container.</li>
        <li>Initialize providers and services.</li>
        <li>Create the root component.</li>
        <li>Insert the component into index.html.</li>
        <li>Start Angular Change Detection.</li>
    </ul>

    <p><strong>Real-Time Example:</strong></p>

    <p>
        When a user opens an Employee Management application, the browser
        loads main.ts, Angular bootstraps the application, creates the
        AppComponent, injects required services, renders the UI, and starts
        listening for user interactions such as button clicks and API responses.
    </p>

    <div class="interview-answer">
        <strong>Interview One-Liner:</strong>
        Bootstrapping is the process by which Angular starts the application,
        creates the dependency injection container, initializes the root
        component, renders the UI, and begins change detection.
    </div>
    `
},
  "What is Data Binding in Angular?": {
    "answer": `
    <p>
        <strong>Data Binding</strong> is the mechanism that synchronizes data
        between the <strong>Component (TypeScript)</strong> and the
        <strong>View (HTML)</strong>. It allows data to flow from the component
        to the view, from the view to the component, or in both directions.
    </p>

    <p><strong>Types of Data Binding:</strong></p>

    <ul>
        <li><strong>Interpolation</strong> - Display data in the view using {{ }}.</li>
        <li><strong>Property Binding</strong> - Bind component values to HTML element properties.</li>
        <li><strong>Event Binding</strong> - Capture user actions such as clicks and key presses.</li>
        <li><strong>Two-Way Binding</strong> - Synchronize data between the component and the view using ngModel.</li>
    </ul>

    <p><strong>1. Interpolation</strong></p>

    <pre><code class="language-html">
<h2>{{employeeName}}</h2>
    </code></pre>

    <p><strong>2. Property Binding</strong></p>

    <pre><code class="language-html">
<img [src]="imageUrl">
    </code></pre>

    <p><strong>3. Event Binding</strong></p>

    <pre><code class="language-html">
<button (click)="saveEmployee()">
Save
</button>
    </code></pre>

    <p><strong>4. Two-Way Binding</strong></p>

    <pre><code class="language-html">
<input [(ngModel)]="employeeName">
    </code></pre>

    <p><strong>Data Flow</strong></p>

    <pre><code class="language-text">
Component (TypeScript)
        │
        ▼
     HTML View
        ▲
        │
User Interaction
    </code></pre>

    <p><strong>Real-Time Example:</strong></p>

    <p>
        In an Employee Management System, employee data retrieved from an API
        is displayed using interpolation. Property binding is used to bind image
        URLs and attributes, event binding handles button clicks such as Save or
        Delete, and two-way binding updates form fields while the user types.
    </p>

    <div class="interview-answer">
        <strong>Interview One-Liner:</strong>
        Data Binding is the process of synchronizing data between the Angular
        Component and the HTML View. Angular supports Interpolation, Property
        Binding, Event Binding, and Two-Way Binding.
    </div>
    `
},
  "What is the Diff b/w ngIf and ngFor?": {
    "answer": `
<h3>Answer</h3>
<p>
ngIf conditionally renders content, while ngFor repeats content for each item in a collection.
</p>
`
  },
  "What is RxJS Library?": {
    "answer": `
    <p>
        <strong>RxJS (Reactive Extensions for JavaScript)</strong> is a
        reactive programming library used in Angular to work with
        <strong>asynchronous data streams</strong>. It provides
        <strong>Observables</strong>, <strong>Observers</strong>, and
        <strong>Operators</strong> to efficiently handle asynchronous
        operations such as HTTP requests, user events, routing, WebSockets,
        and timers.
    </p>

    <p><strong>Why Angular Uses RxJS?</strong></p>

    <ul>
        <li>Handle asynchronous operations.</li>
        <li>Call Web APIs using HttpClient.</li>
        <li>Handle user events.</li>
        <li>Process real-time data.</li>
        <li>Transform and filter data using operators.</li>
        <li>Cancel previous requests using switchMap().</li>
    </ul>

    <p><strong>Observable Example</strong></p>

    <pre><code class="language-typescript">
this.http.get<Employee[]>('/api/employees')
    .subscribe(data => {
        console.log(data);
    });
    </code></pre>

    <p><strong>Observable with Operators</strong></p>

    <pre><code class="language-typescript">
this.http.get<Employee[]>('/api/employees')
.pipe(
    map(data => data.filter(emp => emp.salary > 50000)),
    catchError(err => throwError(() => err))
)
.subscribe(result => console.log(result));
    </code></pre>

    <p><strong>Common RxJS Operators</strong></p>

    <ul>
        <li>map()</li>
        <li>filter()</li>
        <li>switchMap()</li>
        <li>mergeMap()</li>
        <li>concatMap()</li>
        <li>tap()</li>
        <li>catchError()</li>
        <li>retry()</li>
        <li>debounceTime()</li>
        <li>distinctUntilChanged()</li>
    </ul>

    <p><strong>Real-Time Example:</strong></p>

    <p>
        In an Employee Management application, RxJS is used to call ASP.NET Core
        Web APIs, debounce search requests, retry failed HTTP calls,
        cancel previous API requests using switchMap(), and manage
        asynchronous data streams efficiently.
    </p>

    <div class="interview-answer">
        <strong>Interview One-Liner:</strong>
        RxJS is a reactive programming library that enables Angular to handle
        asynchronous data using Observables and powerful operators such as
        map(), filter(), switchMap(), and catchError().
    </div>
    `
},
"RxJS Operators in Angular": {
    "answer": `
    <p>
        <strong>RxJS Operators</strong> are functions used to transform,
        filter, combine, or handle data emitted by an Observable.
        Operators are chained using the <code>pipe()</code> method.
    </p>

    <p><strong>Syntax</strong></p>

    <pre><code class="language-typescript">
this.http.get('/api/employees')
.pipe(
    map(data => data),
    catchError(err => throwError(() => err))
)
.subscribe();
    </code></pre>

    <p><strong>Most Common Operators</strong></p>

    <table border="1" cellpadding="5">
        <tr>
            <th>Operator</th>
            <th>Purpose</th>
        </tr>
        <tr>
            <td>map()</td>
            <td>Transform data</td>
        </tr>
        <tr>
            <td>filter()</td>
            <td>Filter values</td>
        </tr>
        <tr>
            <td>tap()</td>
            <td>Logging / Debugging</td>
        </tr>
        <tr>
            <td>switchMap()</td>
            <td>Cancel previous request</td>
        </tr>
        <tr>
            <td>mergeMap()</td>
            <td>Execute multiple requests in parallel</td>
        </tr>
        <tr>
            <td>concatMap()</td>
            <td>Execute requests sequentially</td>
        </tr>
        <tr>
            <td>catchError()</td>
            <td>Handle errors</td>
        </tr>
        <tr>
            <td>retry()</td>
            <td>Retry failed requests</td>
        </tr>
        <tr>
            <td>debounceTime()</td>
            <td>Delay rapid events</td>
        </tr>
        <tr>
            <td>distinctUntilChanged()</td>
            <td>Ignore duplicate values</td>
        </tr>
        <tr>
            <td>forkJoin()</td>
            <td>Execute multiple APIs and wait for all</td>
        </tr>
        <tr>
            <td>combineLatest()</td>
            <td>Combine latest values from multiple Observables</td>
        </tr>
    </table>

    <p><strong>Interview One-Liner:</strong></p>

    <div class="interview-answer">
        RxJS Operators are functions that transform, filter, combine,
        and manage asynchronous data streams emitted by Observables.
    </div>
    `
},
"What is Pipe in Angular?": {
    "answer": `
    <p>
        An <strong>Angular Pipe</strong> is a feature used to transform or
        format data before displaying it in the HTML template. Pipes improve
        readability by keeping formatting logic out of the component.
    </p>

    <p><strong>Syntax</strong></p>

    <pre><code class="language-html">
{{ value | pipeName }}
    </code></pre>

    <p><strong>Built-in Pipes</strong></p>

    <table border="1" cellpadding="5">
        <tr>
            <th>Pipe</th>
            <th>Purpose</th>
        </tr>
        <tr>
            <td>uppercase</td>
            <td>Convert text to uppercase</td>
        </tr>
        <tr>
            <td>lowercase</td>
            <td>Convert text to lowercase</td>
        </tr>
        <tr>
            <td>titlecase</td>
            <td>Capitalize each word</td>
        </tr>
        <tr>
            <td>date</td>
            <td>Format dates</td>
        </tr>
        <tr>
            <td>currency</td>
            <td>Format currency values</td>
        </tr>
        <tr>
            <td>percent</td>
            <td>Display percentages</td>
        </tr>
        <tr>
            <td>json</td>
            <td>Display objects as JSON</td>
        </tr>
        <tr>
            <td>slice</td>
            <td>Extract a portion of a string or array</td>
        </tr>
        <tr>
            <td>async</td>
            <td>Automatically subscribes to Observables or Promises</td>
        </tr>
    </table>

    <p><strong>Examples</strong></p>

    <pre><code class="language-html">
{{ employeeName | uppercase }}

{{ salary | currency:'INR' }}

{{ joiningDate | date:'dd/MM/yyyy' }}

{{ employee | json }}
    </code></pre>

    <p><strong>Custom Pipe</strong></p>

    <pre><code class="language-typescript">
@Pipe({
    name: 'welcome'
})
export class WelcomePipe implements PipeTransform {

    transform(value: string): string {
        return 'Welcome ' + value;
    }
}
    </code></pre>

    <pre><code class="language-html">
{{ 'John' | welcome }}
    </code></pre>

    <p><strong>Real-Time Example:</strong></p>

    <p>
        In an Employee Management application, pipes are used to display
        employee names in uppercase, format salaries as currency, show dates
        in a readable format, and automatically bind API data using the
        async pipe.
    </p>

    <div class="interview-answer">
        <strong>Interview One-Liner:</strong>
        A Pipe is used to transform or format data in Angular templates
        without changing the original data.
    </div>
    `
},
"What is Observable in Angular?": {
    "answer": `
    <p>
        An <strong>Observable</strong> is one of the core concepts of
        <strong>RxJS</strong>. It represents a stream of asynchronous data
        that emits values over time. Angular uses Observables extensively for
        handling HTTP requests, user events, routing, form value changes,
        and WebSocket communication.
    </p>

    <p><strong>Observable Flow</strong></p>

    <pre><code class="language-text">
Observable
      │
      ▼
pipe()
      │
      ▼
subscribe()
      │
      ▼
Component/UI
    </code></pre>

    <p><strong>Example - HTTP Request</strong></p>

    <pre><code class="language-typescript">
this.http.get<Employee[]>('/api/employees')
    .subscribe({
        next: employees => console.log(employees),
        error: err => console.log(err),
        complete: () => console.log('Completed')
    });
    </code></pre>

    <p><strong>Observable with Operators</strong></p>

    <pre><code class="language-typescript">
this.http.get<Employee[]>('/api/employees')
.pipe(
    map(data => data.filter(emp => emp.salary > 50000)),
    catchError(err => throwError(() => err))
)
.subscribe(result => console.log(result));
    </code></pre>

    <p><strong>Observable Lifecycle</strong></p>

    <ul>
        <li>Created.</li>
        <li>Subscribed.</li>
        <li>Emits one or more values.</li>
        <li>Completes or throws an error.</li>
    </ul>

    <p><strong>Real-Time Example:</strong></p>

    <p>
        In an Employee Management application, HttpClient returns an
        Observable. The component subscribes to it, receives employee data,
        and updates the UI. Observables are also used for search boxes,
        routing events, and real-time notifications.
    </p>

    <div class="interview-answer">
        <strong>Interview One-Liner:</strong>
        An Observable is an RxJS object that represents a stream of
        asynchronous data. It emits values over time and allows Angular
        applications to react to asynchronous events efficiently.
    </div>
    `
},
"Explain pipe() and subscribe() in Observables": {
    "answer": `
    <p>
        In RxJS, <strong>pipe()</strong> is used to transform, filter, or modify
        data emitted by an Observable using operators. The
        <strong>subscribe()</strong> method starts the Observable execution and
        receives the emitted values.
    </p>

    <p><strong>Observable Flow</strong></p>

    <pre><code class="language-text">
Observable
     │
     ▼
pipe()
     │
     ▼
Operators
(map, filter, switchMap...)
     │
     ▼
subscribe()
     │
     ▼
Component/UI
    </code></pre>

    <p><strong>Example</strong></p>

    <pre><code class="language-typescript">
this.http.get<Employee[]>('/api/employees')
.pipe(
    map(data => data.filter(emp => emp.salary > 50000))
)
.subscribe({
    next: result => console.log(result),
    error: err => console.log(err),
    complete: () => console.log('Completed')
});
    </code></pre>

    <div class="interview-answer">
        <strong>Interview One-Liner:</strong>
        pipe() transforms the data stream, while subscribe() starts the
        Observable and receives the emitted values.
    </div>
    `
},
"What is subscribe() in RxJS?": {
    "answer": `
    <p>
        <strong>subscribe()</strong> is a method used to receive data from an
        Observable. It starts the Observable execution and allows you to handle
        emitted values, errors, and completion events.
    </p>

    <p><strong>Syntax</strong></p>

    <pre><code class="language-typescript">
this.http.get<Employee[]>('/api/employees')
.subscribe({
    next: data => console.log(data),
    error: err => console.log(err),
    complete: () => console.log('Completed')
});
    </code></pre>

    <p><strong>Responsibilities of subscribe()</strong></p>

    <ul>
        <li>Starts the Observable.</li>
        <li>Receives emitted data.</li>
        <li>Handles errors.</li>
        <li>Detects completion.</li>
    </ul>

    <div class="interview-answer">
        <strong>Interview One-Liner:</strong>
        subscribe() starts an Observable and receives the emitted values,
        errors, and completion notification.
    </div>
    `
},
"Important RxJS Operators in Angular": {
    "answer": `
    <p>
        RxJS operators are functions used with the
        <strong>pipe()</strong> method to transform, filter,
        combine, and manage asynchronous data streams.
    </p>

    <table border="1" cellpadding="5">
        <tr>
            <th>Operator</th>
            <th>Purpose</th>
            <th>Real-Time Example</th>
        </tr>

        <tr>
            <td>map()</td>
            <td>Transform data</td>
            <td>Format API response</td>
        </tr>

        <tr>
            <td>filter()</td>
            <td>Filter data</td>
            <td>Active employees only</td>
        </tr>

        <tr>
            <td>tap()</td>
            <td>Logging / Debugging</td>
            <td>Log API response</td>
        </tr>

        <tr>
            <td>switchMap()</td>
            <td>Cancel previous request</td>
            <td>Search AutoComplete</td>
        </tr>

        <tr>
            <td>mergeMap()</td>
            <td>Run requests in parallel</td>
            <td>Load multiple employee details</td>
        </tr>

        <tr>
            <td>concatMap()</td>
            <td>Run requests sequentially</td>
            <td>Upload multiple files</td>
        </tr>

        <tr>
            <td>catchError()</td>
            <td>Handle errors</td>
            <td>API failure</td>
        </tr>

        <tr>
            <td>retry()</td>
            <td>Retry failed requests</td>
            <td>Network timeout</td>
        </tr>

        <tr>
            <td>debounceTime()</td>
            <td>Delay rapid events</td>
            <td>Search box</td>
        </tr>

        <tr>
            <td>distinctUntilChanged()</td>
            <td>Ignore duplicate values</td>
            <td>Avoid duplicate API calls</td>
        </tr>

        <tr>
            <td>forkJoin()</td>
            <td>Wait for multiple APIs</td>
            <td>Dashboard loading</td>
        </tr>

        <tr>
            <td>combineLatest()</td>
            <td>Combine latest values</td>
            <td>Filters + Search</td>
        </tr>
    </table>

    <div class="interview-answer">
        <strong>Interview Tip:</strong>
        The most frequently asked operators are map(),
        switchMap(), mergeMap(), concatMap(), catchError(),
        retry(), debounceTime(), distinctUntilChanged(),
        and forkJoin().
    </div>
    `
},
"How would you implement state management using NgRx?": {
    "answer": `
    <p>
        <strong>NgRx</strong> is a state management library for Angular based on
        the Redux pattern. It provides a centralized Store to manage application
        state in a predictable and immutable way.
    </p>

    <p><strong>NgRx Flow</strong></p>

    <pre><code class="language-text">
Component
    │
Dispatch Action
    │
    ▼
Action
    │
    ▼
Effect (Optional API Call)
    │
    ▼
Service
    │
    ▼
Web API
    │
    ▼
Reducer
    │
    ▼
Store
    │
    ▼
Selector
    │
    ▼
Component
    </code></pre>

    <p><strong>Main Building Blocks</strong></p>

    <ul>
        <li>Store</li>
        <li>Actions</li>
        <li>Reducers</li>
        <li>Effects</li>
        <li>Selectors</li>
    </ul>

    <p><strong>Interview One-Liner:</strong></p>

    <div class="interview-answer">
        NgRx provides centralized state management using the Redux pattern,
        making state predictable, immutable, and easier to manage in
        large Angular applications.
    </div>
    `
},
"How would you implement state management using NgRx?": {
    "answer": `
    <p>
        <strong>NgRx</strong> is a state management library for Angular based on
        the Redux pattern. It provides a centralized Store to manage application
        state in a predictable and immutable way.
    </p>

    <p><strong>NgRx Flow</strong></p>

    <pre><code class="language-text">
Component
    │
Dispatch Action
    │
    ▼
Action
    │
    ▼
Effect (Optional API Call)
    │
    ▼
Service
    │
    ▼
Web API
    │
    ▼
Reducer
    │
    ▼
Store
    │
    ▼
Selector
    │
    ▼
Component
    </code></pre>

    <p><strong>Main Building Blocks</strong></p>

    <ul>
        <li>Store</li>
        <li>Actions</li>
        <li>Reducers</li>
        <li>Effects</li>
        <li>Selectors</li>
    </ul>

    <p><strong>Interview One-Liner:</strong></p>

    <div class="interview-answer">
        NgRx provides centralized state management using the Redux pattern,
        making state predictable, immutable, and easier to manage in
        large Angular applications.
    </div>
    `
},
"Explain lazy loading vs preloading strategies in Angular routing.": {
    "answer": `
    <p>
        <strong>Lazy Loading</strong> and <strong>Preloading</strong> are Angular
        routing techniques used to improve application performance by controlling
        when feature modules are loaded.
    </p>

    <p><strong>Lazy Loading</strong></p>

    <p>
        Lazy loading means a feature module is loaded <strong>only when the user
        navigates to its route</strong>. This reduces the initial bundle size and
        makes the application load faster.
    </p>

    <pre><code class="language-typescript">
// app-routing.module.ts

const routes: Routes = [
{
    path: 'products',
    loadChildren: () =>
        import('./products/products.module')
        .then(m => m.ProductsModule)
}
];
    </code></pre>

    <p><strong>Lazy Loading Flow</strong></p>

    <pre><code class="language-text">
Application Starts
        │
        ▼
Only App Module Loads
        │
        ▼
User Navigates to /products
        │
        ▼
Products Module Downloads
        │
        ▼
Component Loads
    </code></pre>

    <p><strong>Preloading Strategy</strong></p>

    <p>
        Preloading loads lazy-loaded modules <strong>after the application has
        finished loading</strong>. It improves navigation speed because modules
        are downloaded in the background before the user visits them.
    </p>

    <pre><code class="language-typescript">
@NgModule({
imports: [
    RouterModule.forRoot(routes, {
        preloadingStrategy: PreloadAllModules
    })
]
})
export class AppRoutingModule {}
    </code></pre>

    <p><strong>Preloading Flow</strong></p>

    <pre><code class="language-text">
Application Starts
        │
        ▼
App Module Loads
        │
        ▼
Application Becomes Interactive
        │
        ▼
Background Downloads Lazy Modules
        │
        ▼
User Navigates
        │
        ▼
Module Already Available
    </code></pre>

    <p><strong>Lazy Loading vs Preloading</strong></p>

    <table>
        <thead>
            <tr>
                <th>Feature</th>
                <th>Lazy Loading</th>
                <th>Preloading</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>When module loads</td>
                <td>On first navigation</td>
                <td>After app loads (background)</td>
            </tr>
            <tr>
                <td>Initial load time</td>
                <td>Fastest</td>
                <td>Slightly higher network usage</td>
            </tr>
            <tr>
                <td>Navigation speed</td>
                <td>First visit may be slower</td>
                <td>Almost instant</td>
            </tr>
            <tr>
                <td>Network usage</td>
                <td>Only when needed</td>
                <td>Downloads modules proactively</td>
            </tr>
            <tr>
                <td>Best for</td>
                <td>Large applications</td>
                <td>Frequently visited modules</td>
            </tr>
        </tbody>
    </table>

    <p><strong>Common Preloading Strategies</strong></p>

    <ul>
        <li>NoPreloading (default)</li>
        <li>PreloadAllModules</li>
        <li>Custom Preloading Strategy (load selected modules)</li>
    </ul>

    <p><strong>When to Use</strong></p>

    <ul>
        <li>Use Lazy Loading to reduce the initial bundle size.</li>
        <li>Use PreloadAllModules when users are likely to visit most pages.</li>
        <li>Use a Custom Preloading Strategy to preload only important feature modules.</li>
    </ul>

    <p><strong>Interview One-Liner:</strong></p>

    <div class="interview-answer">
        Lazy loading loads a feature module only when it is first requested,
        while preloading downloads lazy-loaded modules in the background after
        the application starts, providing faster subsequent navigation.
    </div>
    `
},
"Secure Angular app against XSS and CSRF attacks?": {
    "answer": `
    <p>
        <strong>Angular</strong> provides built-in security features to protect
        applications against common web vulnerabilities such as
        <strong>Cross-Site Scripting (XSS)</strong> and
        <strong>Cross-Site Request Forgery (CSRF)</strong>.
        However, developers should also follow security best practices.
    </p>

    <p><strong>XSS (Cross-Site Scripting)</strong></p>

    <p>
        XSS occurs when an attacker injects malicious JavaScript into a web page.
        Angular automatically sanitizes untrusted values before rendering them
        in the DOM, reducing the risk of XSS attacks.
    </p>

    <pre><code class="language-text">
User Input
      │
      ▼
Angular Sanitization
      │
      ▼
Safe HTML Rendered
      │
      ▼
Malicious Script Blocked
    </code></pre>

    <p><strong>Best Practices to Prevent XSS</strong></p>

    <ul>
        <li>Use Angular's template binding instead of manipulating the DOM directly.</li>
        <li>Avoid using <strong>innerHTML</strong> unless absolutely necessary.</li>
        <li>Never use <strong>bypassSecurityTrustHtml()</strong> with untrusted data.</li>
        <li>Validate and sanitize user input on both client and server.</li>
        <li>Implement a strong Content Security Policy (CSP).</li>
        <li>Avoid using <strong>eval()</strong> or executing dynamic JavaScript.</li>
    </ul>

    <p><strong>CSRF (Cross-Site Request Forgery)</strong></p>

    <p>
        CSRF tricks a user's browser into sending unauthorized requests to a
        trusted application. The most common protection is using
        <strong>CSRF (Anti-Forgery) Tokens</strong>.
    </p>

    <pre><code class="language-text">
User Logs In
      │
      ▼
Server Generates CSRF Token
      │
      ▼
Token Stored (Cookie)
      │
      ▼
Angular Sends Token in Header
      │
      ▼
Server Validates Token
      │
      ▼
Request Accepted
    </code></pre>

    <p><strong>Best Practices to Prevent CSRF</strong></p>

    <ul>
        <li>Use CSRF/Anti-Forgery tokens for state-changing requests.</li>
        <li>Use SameSite cookies (Lax or Strict).</li>
        <li>Always use HTTPS.</li>
        <li>Validate Origin and Referer headers on the server.</li>
        <li>Require authentication and authorization for protected APIs.</li>
        <li>Avoid storing sensitive tokens in localStorage when possible.</li>
    </ul>

    <p><strong>Additional Angular Security Best Practices</strong></p>

    <ul>
        <li>Use Angular HttpInterceptor to attach authentication tokens.</li>
        <li>Store JWT securely (prefer HttpOnly cookies if supported).</li>
        <li>Enable CORS only for trusted domains.</li>
        <li>Keep Angular and third-party libraries updated.</li>
        <li>Perform server-side validation for all requests.</li>
    </ul>

    <p><strong>XSS vs CSRF</strong></p>

    <table>
        <thead>
            <tr>
                <th>Feature</th>
                <th>XSS</th>
                <th>CSRF</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Attack Type</td>
                <td>Injects malicious JavaScript</td>
                <td>Forces unauthorized requests</td>
            </tr>
            <tr>
                <td>Target</td>
                <td>User's browser</td>
                <td>Authenticated user session</td>
            </tr>
            <tr>
                <td>Primary Protection</td>
                <td>Sanitization & CSP</td>
                <td>CSRF Tokens & SameSite Cookies</td>
            </tr>
            <tr>
                <td>Angular Support</td>
                <td>Built-in sanitization</td>
                <td>Works with CSRF token mechanism</td>
            </tr>
        </tbody>
    </table>

    <p><strong>Interview One-Liner:</strong></p>

    <div class="interview-answer">
        Angular protects against XSS through automatic DOM sanitization, while
        CSRF protection is typically implemented using anti-forgery tokens,
        SameSite cookies, HTTPS, and server-side validation.
    </div>
    `
},
"Optimize Angular app performance?": {
    "answer": `
    <p>
        Optimizing an <strong>Angular application</strong> involves reducing the
        application bundle size, minimizing unnecessary change detection cycles,
        and efficiently caching data to improve load time and runtime performance.
    </p>

    <p><strong>Performance Optimization Areas</strong></p>

    <pre><code class="language-text">
Angular Performance
        │
        ├── Bundle Size Optimization
        ├── Change Detection Optimization
        ├── API & Browser Caching
        ├── Lazy Loading
        ├── Rendering Optimization
        └── Build Optimization
    </code></pre>

    <p><strong>1. Bundle Size Optimization</strong></p>

    <ul>
        <li>Use Lazy Loading for feature modules.</li>
        <li>Enable production build using <strong>ng build --configuration production</strong>.</li>
        <li>Use tree shaking to remove unused code.</li>
        <li>Import only required Angular Material modules.</li>
        <li>Replace large libraries with lightweight alternatives whenever possible.</li>
        <li>Compress JavaScript, CSS, and images using build optimization.</li>
        <li>Use standalone components where appropriate to reduce module overhead.</li>
    </ul>

    <p><strong>2. Change Detection Optimization</strong></p>

    <ul>
        <li>Use <strong>ChangeDetectionStrategy.OnPush</strong>.</li>
        <li>Use the <strong>async</strong> pipe instead of manual subscriptions.</li>
        <li>Implement <strong>trackBy</strong> in *ngFor.</li>
        <li>Avoid calling methods directly from templates.</li>
        <li>Detach change detection for heavy components when appropriate.</li>
        <li>Use Angular Signals where applicable (Angular 16+).</li>
    </ul>

    <pre><code class="language-typescript">
@Component({
  selector: 'app-users',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersComponent {}
    </code></pre>

    <p><strong>3. Caching Optimization</strong></p>

    <ul>
        <li>Cache frequently used API responses.</li>
        <li>Use RxJS shareReplay() to avoid duplicate HTTP requests.</li>
        <li>Use browser caching with proper Cache-Control headers.</li>
        <li>Use Service Workers (PWA) for offline caching.</li>
        <li>Store small static data locally when appropriate.</li>
    </ul>

    <pre><code class="language-typescript">
this.users$ = this.http.get('/api/users')
.pipe(
    shareReplay(1)
);
    </code></pre>

    <p><strong>4. Rendering Optimization</strong></p>

    <ul>
        <li>Implement virtual scrolling for large lists.</li>
        <li>Use pagination instead of rendering thousands of records.</li>
        <li>Load images lazily.</li>
        <li>Use skeleton loaders during API calls.</li>
    </ul>

    <p><strong>5. Build Optimization</strong></p>

    <ul>
        <li>Enable AOT (Ahead-of-Time) compilation.</li>
        <li>Enable optimization and minification in production builds.</li>
        <li>Remove unused dependencies.</li>
        <li>Analyze bundle size using source-map-explorer or Angular DevTools.</li>
    </ul>

    <p><strong>Summary Table</strong></p>

    <table>
        <thead>
            <tr>
                <th>Area</th>
                <th>Optimization</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Bundle Size</td>
                <td>Lazy loading, tree shaking, production build</td>
            </tr>
            <tr>
                <td>Change Detection</td>
                <td>OnPush, async pipe, trackBy, Signals</td>
            </tr>
            <tr>
                <td>Caching</td>
                <td>shareReplay(), browser cache, service workers</td>
            </tr>
            <tr>
                <td>Rendering</td>
                <td>Virtual scrolling, pagination, lazy images</td>
            </tr>
            <tr>
                <td>Build</td>
                <td>AOT, optimization, bundle analysis</td>
            </tr>
        </tbody>
    </table>

    <p><strong>Interview One-Liner:</strong></p>

    <div class="interview-answer">
        I optimize Angular applications by reducing bundle size through lazy loading
        and tree shaking, minimizing change detection with OnPush, async pipe,
        and trackBy, and improving response time using API caching,
        shareReplay(), browser caching, and service workers.
    </div>
    `
},
"How do you handle error propagation and retry strategies with RxJS?": {
    "answer": `
    <p>
        <strong>RxJS</strong> provides powerful operators for handling errors and
        implementing retry mechanisms in asynchronous operations such as HTTP requests.
        Instead of handling errors in every component, it's recommended to centralize
        error handling using an <strong>HTTP Interceptor</strong> and use retry
        operators only for transient failures.
    </p>

    <p><strong>Error Handling Flow</strong></p>

    <pre><code class="language-text">
Component
      │
      ▼
Service
      │
      ▼
HTTP Request
      │
      ▼
Success ─────────────► Response
      │
      ▼
Error
      │
      ▼
catchError()
      │
      ▼
Log / Transform Error
      │
      ▼
Component or Global Error Handler
    </code></pre>

    <p><strong>Common RxJS Operators</strong></p>

    <ul>
        <li><strong>catchError()</strong> – Catches and handles errors.</li>
        <li><strong>throwError()</strong> – Re-throws an error after processing.</li>
        <li><strong>retry()</strong> – Retries a failed operation a fixed number of times.</li>
        <li><strong>retryWhen()</strong> – Retries based on custom logic such as delay or status code.</li>
        <li><strong>finalize()</strong> – Executes cleanup logic regardless of success or failure.</li>
        <li><strong>tap()</strong> – Performs logging or side effects without modifying the stream.</li>
    </ul>

    <p><strong>Error Handling Example</strong></p>

    <pre><code class="language-typescript">
getUsers() {
  return this.http.get('/api/users').pipe(
    catchError(error => {
      console.error(error);
      return throwError(() => error);
    })
  );
}
    </code></pre>

    <p><strong>Retry Example</strong></p>

    <pre><code class="language-typescript">
getUsers() {
  return this.http.get('/api/users').pipe(
    retry(3),
    catchError(error => {
      return throwError(() => error);
    })
  );
}
    </code></pre>

    <p><strong>Retry with Delay Example</strong></p>

    <pre><code class="language-typescript">
getUsers() {
  return this.http.get('/api/users').pipe(
    retryWhen(errors =>
      errors.pipe(delay(2000))
    )
  );
}
    </code></pre>

    <p><strong>Best Practices</strong></p>

    <ul>
        <li>Handle HTTP errors centrally using an HTTP Interceptor.</li>
        <li>Retry only transient failures such as network issues or HTTP 5xx errors.</li>
        <li>Do not retry client-side errors like 400 or 404.</li>
        <li>Show user-friendly error messages instead of raw server errors.</li>
        <li>Log errors for monitoring and troubleshooting.</li>
        <li>Use <strong>finalize()</strong> to stop loaders or perform cleanup.</li>
    </ul>

    <p><strong>Interview One-Liner:</strong></p>

    <div class="interview-answer">
        RxJS handles errors using <strong>catchError()</strong> and supports retry
        mechanisms with <strong>retry()</strong> and <strong>retryWhen()</strong>.
        In production applications, error handling is typically centralized using
        an HTTP Interceptor, while retries are applied only for temporary failures.
    </div>
    `
},

"How do you handle HTTP errors centrally using an HTTP Interceptor?": {
    "answer": `
    <p>
        An <strong>HTTP Interceptor</strong> allows us to intercept every HTTP
        request and response before they reach the component or service.
        Instead of writing <strong>catchError()</strong> in every service,
        we can handle errors in one central place, making the application
        cleaner, reusable, and easier to maintain.
    </p>

    <p><strong>Error Handling Flow</strong></p>

    <pre><code class="language-text">
Component
      │
      ▼
Service
      │
      ▼
HTTP Interceptor
      │
      ▼
Backend API
      │
      ▼
Response / Error
      │
      ▼
Interceptor Handles Error
      │
      ▼
Log Error / Show Notification
      │
      ▼
Return Error to Component
    </code></pre>

    <p><strong>HTTP Interceptor Example</strong></p>

    <pre><code class="language-typescript">
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    return next.handle(req).pipe(

      catchError((error: HttpErrorResponse) => {

        if (error.status === 401) {
          console.log('Unauthorized');
        }
        else if (error.status === 404) {
          console.log('Resource not found');
        }
        else if (error.status >= 500) {
          console.log('Server Error');
        }

        return throwError(() => error);
      })

    );
  }
}
    </code></pre>

    <p><strong>Register the Interceptor</strong></p>

    <pre><code class="language-typescript">
providers: [
{
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true
}
]
    </code></pre>

    <p><strong>Benefits</strong></p>

    <ul>
        <li>Centralized error handling.</li>
        <li>Eliminates duplicate catchError() logic.</li>
        <li>Provides consistent error messages across the application.</li>
        <li>Supports logging and monitoring.</li>
        <li>Can redirect users on authentication failures.</li>
        <li>Easy to maintain and extend.</li>
    </ul>

    <p><strong>Interview One-Liner:</strong></p>

    <div class="interview-answer">
        I use an HTTP Interceptor to centrally handle all HTTP errors.
        It intercepts every request and response, processes errors based on
        their status codes, logs them, shows user-friendly messages,
        and returns the error to the caller when required.
    </div>
    `
},
"Explain the role of Angular CLI in build optimization and deployment.": {
    "answer": `
    <p>
        <strong>Angular CLI</strong> is the official command-line tool for Angular.
        It automates development, build, testing, and deployment tasks while providing
        several built-in optimizations for production applications.
    </p>

    <p><strong>Angular CLI Build & Deployment Flow</strong></p>

    <pre><code class="language-text">
Source Code
      │
      ▼
Angular CLI
      │
      ├── AOT Compilation
      ├── Tree Shaking
      ├── Minification
      ├── Bundling
      ├── Dead Code Elimination
      ├── Asset Optimization
      └── Output Generation
      │
      ▼
Optimized Production Build
      │
      ▼
Deploy to Web Server / Cloud
    </code></pre>

    <p><strong>Build Optimizations</strong></p>

    <ul>
        <li>Performs <strong>Ahead-of-Time (AOT)</strong> compilation to compile templates during build time.</li>
        <li>Uses <strong>Tree Shaking</strong> to remove unused code.</li>
        <li>Minifies JavaScript, CSS, and HTML.</li>
        <li>Bundles application files for efficient loading.</li>
        <li>Optimizes images, fonts, and static assets.</li>
        <li>Generates hashed filenames for effective browser caching.</li>
        <li>Supports differential loading for compatible browsers (where applicable).</li>
    </ul>

    <p><strong>Common CLI Commands</strong></p>

    <pre><code class="language-bash">
# Development
ng serve

# Production Build
ng build --configuration production

# Run Unit Tests
ng test

# Run End-to-End Tests
ng e2e

# Analyze Build
ng build --stats-json
    </code></pre>

    <p><strong>Deployment Process</strong></p>

    <ul>
        <li>Create a production build using <strong>ng build --configuration production</strong>.</li>
        <li>Generate optimized files inside the <strong>dist</strong> folder.</li>
        <li>Deploy the generated files to IIS, Nginx, Apache, Azure App Service, AWS S3, or other hosting platforms.</li>
        <li>Configure the web server to redirect all routes to <strong>index.html</strong> for Angular routing.</li>
    </ul>

    <p><strong>Best Practices</strong></p>

    <ul>
        <li>Always use production builds for deployment.</li>
        <li>Enable AOT and optimization.</li>
        <li>Use lazy loading to reduce the initial bundle size.</li>
        <li>Enable output hashing for browser caching.</li>
        <li>Integrate Angular CLI build commands into CI/CD pipelines.</li>
        <li>Analyze bundle size regularly to identify optimization opportunities.</li>
    </ul>

    <p><strong>Interview One-Liner:</strong></p>

    <div class="interview-answer">
        Angular CLI automates the build and deployment process by performing
        AOT compilation, tree shaking, minification, bundling, and asset optimization,
        producing an optimized production-ready application that can be deployed
        to any web server or cloud platform.
    </div>
    `
},
"How do you call multiple APIs simultaneously in an Angular service?": {
    "answer": `
    <p>
        When multiple independent APIs need to be called simultaneously,
        Angular uses <strong>RxJS combination operators</strong>. The most
        commonly used operator for HTTP requests is
        <strong>forkJoin()</strong>.
    </p>

    <p>
        <strong>forkJoin()</strong> executes all HTTP requests in parallel
        and waits until all of them complete. Once every request succeeds,
        it returns a single combined response.
    </p>

    <p><strong>Execution Flow</strong></p>

    <pre><code class="language-text">
Component
      │
      ▼
Service
      │
      ▼
forkJoin()
      │
      ├── API 1
      ├── API 2
      ├── API 3
      └── API 4
      │
      ▼
Wait for All Responses
      │
      ▼
Combined Result
      │
      ▼
Component
    </code></pre>

    <p><strong>Example</strong></p>

    <pre><code class="language-typescript">
getDashboardData() {

  return forkJoin({

    users: this.http.get('/api/users'),

    orders: this.http.get('/api/orders'),

    products: this.http.get('/api/products')

  });

}
    </code></pre>

    <p><strong>Component</strong></p>

    <pre><code class="language-typescript">
this.dashboardService.getDashboardData()
.subscribe(result => {

   console.log(result.users);

   console.log(result.orders);

   console.log(result.products);

});
    </code></pre>

    <p><strong>Other RxJS Operators</strong></p>

    <ul>
        <li><strong>forkJoin()</strong> - Waits for all APIs to complete. Best for HTTP requests.</li>
        <li><strong>combineLatest()</strong> - Emits whenever any observable emits after all have emitted once.</li>
        <li><strong>zip()</strong> - Combines values one by one in sequence.</li>
        <li><strong>merge()</strong> - Processes responses as soon as they arrive.</li>
        <li><strong>concat()</strong> - Executes requests one after another.</li>
    </ul>

    <p><strong>Best Practices</strong></p>

    <ul>
        <li>Use <strong>forkJoin()</strong> for independent HTTP API calls.</li>
        <li>Handle errors for individual APIs if partial success is acceptable.</li>
        <li>Use an HTTP Interceptor for centralized error handling.</li>
        <li>Avoid nested subscriptions.</li>
        <li>Use strongly typed models for API responses.</li>
    </ul>

    <p><strong>Interview One-Liner:</strong></p>

    <div class="interview-answer">
        I use <strong>forkJoin()</strong> to execute multiple independent HTTP
        requests in parallel. It waits until all APIs complete and then returns
        a single combined response, reducing the overall response time compared
        to sequential API calls.
    </div>
    `
},
"How do you handle dependent API calls in Angular using RxJS?": {
    "answer": `
    <p>
        When one API depends on the response of another API,
        the requests should be executed sequentially instead of
        in parallel. In RxJS, this is commonly achieved using
        <strong>switchMap()</strong>.
    </p>

    <p><strong>Execution Flow</strong></p>

    <pre><code class="language-text">
Component
      │
      ▼
API 1
      │
      ▼
switchMap()
      │
      ▼
API 2 (uses API 1 response)
      │
      ▼
switchMap()
      │
      ▼
API 3 (uses API 2 response)
      │
      ▼
Combined Result
      │
      ▼
Component
    </code></pre>

    <p><strong>Example</strong></p>

    <pre><code class="language-typescript">
this.http.get<User>('/api/user').pipe(

  switchMap(user =>

    this.http.get<Order[]>(
      '/api/orders/' + user.id
    )

  ),

  switchMap(orders =>

    this.http.get<Payment[]>(
      '/api/payments/' + orders[0].id
    )

  )

).subscribe(result => {

    console.log(result);

});
    </code></pre>

    <p><strong>Why switchMap?</strong></p>

    <ul>
        <li>Cancels the previous request if a new value is emitted.</li>
        <li>Avoids nested subscriptions.</li>
        <li>Keeps the code clean and readable.</li>
        <li>Ideal for dependent HTTP requests.</li>
    </ul>

    <p><strong>When to use other mapping operators?</strong></p>

    <ul>
        <li><strong>switchMap()</strong> - Latest request only (most common for HTTP).</li>
        <li><strong>concatMap()</strong> - Execute requests sequentially without cancellation.</li>
        <li><strong>mergeMap()</strong> - Execute multiple requests in parallel.</li>
        <li><strong>exhaustMap()</strong> - Ignore new requests while one is already running.</li>
    </ul>

    <p><strong>Interview One-Liner:</strong></p>

    <div class="interview-answer">
        For dependent API calls, I use <strong>switchMap()</strong> to chain
        requests without nested subscriptions. If every request must complete
        in order without cancellation, I use <strong>concatMap()</strong>.
    </div>
    `
},
};
