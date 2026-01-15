import { AnimationContainer, SectionContainer } from '@/components';
import { HeroSection } from '@/components/sections';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Spiderly',
  description:
    'Privacy Policy for Spiderly - Learn how we handle information and your responsibilities when using Spiderly as a development tool.',
};

const PrivacyPolicyPage = () => {
  return (
    <div className="mb-3">
      <HeroSection
        title="Privacy Policy"
        description="Learn how Spiderly handles information and your responsibilities when using it as a development tool."
      />

      <SectionContainer>
        <AnimationContainer>
          <div className="max-w-4xl mx-auto w-full prose prose-invert prose-p:text-muted-foreground prose-li:text-muted-foreground">
            <p className="text-sm text-muted-foreground">
              <strong>Effective Date:</strong> January 13, 2026
            </p>

            <h2>1. Introduction</h2>
            <p>
              This Privacy Policy describes how Spiderly (the &quot;Library&quot;) handles
              information when you use it as a developer tool. Spiderly is a free open-source code
              generation framework distributed via NuGet and GitHub that operates entirely on your
              local development machine.
            </p>

            <h2>2. Information We Do NOT Collect</h2>
            <p>Spiderly does not collect, transmit, store, or process any of the following:</p>
            <ul>
              <li>
                <strong>No Personal Information:</strong> We do not collect your name, email, or
                contact information
              </li>
              <li>
                <strong>No Usage Analytics:</strong> We do not track how you use the Library
              </li>
              <li>
                <strong>No Telemetry:</strong> We do not collect error reports, crash data, or
                performance metrics
              </li>
              <li>
                <strong>No Source Code:</strong> Your source code and generated code never leave
                your machine
              </li>
              <li>
                <strong>No Development Data:</strong> Entity definitions, database schemas, and
                configuration remain local
              </li>
              <li>
                <strong>No Network Communication:</strong> The Library does not &quot;phone
                home&quot; or connect to our servers
              </li>
            </ul>

            <h2>3. How Spiderly Works Locally</h2>
            <p>Spiderly is a development-time tool that:</p>
            <ol>
              <li>
                <strong>Reads</strong> your Entity Framework Core model definitions from your local
                codebase
              </li>
              <li>
                <strong>Analyzes</strong> attributes and metadata in your code
              </li>
              <li>
                <strong>Generates</strong> C# and TypeScript source files directly in your project
                folders
              </li>
              <li>
                <strong>Operates</strong> entirely on your development machine without internet
                connectivity
              </li>
            </ol>
            <p>
              All operations are performed locally using .NET Source Generators and the Spiderly CLI
              tool.
            </p>

            <h2>4. Data in Applications You Generate</h2>
            <p>
              While Spiderly itself collects no data, applications you build using Spiderly may
              collect and process user data. As the application developer, you are responsible for:
            </p>

            <h3>4.1 User Data Handling</h3>
            <p>Generated applications may include features that handle:</p>
            <ul>
              <li>
                <strong>Email Addresses:</strong> For authentication and login verification
              </li>
              <li>
                <strong>Authentication Tokens:</strong> JWT tokens and refresh tokens stored in
                cookies or local storage
              </li>
              <li>
                <strong>IP Addresses:</strong> Logged for security purposes and device tracking
              </li>
              <li>
                <strong>Browser/Device Information:</strong> Used to manage multiple sessions per
                user
              </li>
              <li>
                <strong>Uploaded Files:</strong> Documents and images stored in your configured
                storage provider
              </li>
              <li>
                <strong>Application-Specific Data:</strong> Any business data your application
                collects
              </li>
            </ul>

            <h3>4.2 Your Privacy Responsibilities</h3>
            <p>When you deploy applications built with Spiderly, you must:</p>
            <ul>
              <li>Create your own Privacy Policy for your application&apos;s end users</li>
              <li>Comply with applicable privacy laws (GDPR, CCPA, PIPEDA, etc.)</li>
              <li>Obtain appropriate user consent for data collection</li>
              <li>Implement data retention and deletion policies</li>
              <li>Secure user data with appropriate technical measures</li>
              <li>Disclose how you use third-party services</li>
            </ul>

            <h2>5. Third-Party Services Configuration</h2>
            <p>
              Spiderly generates code that integrates with third-party services you configure. Your
              use of these services is subject to their privacy policies:
            </p>

            <h3>5.1 Authentication Providers</h3>
            <ul>
              <li>
                <strong>Google OAuth 2.0:</strong> If you enable Google Sign-In, Google&apos;s
                Privacy Policy applies
              </li>
              <li>
                <strong>Email Verification:</strong> Uses your configured SMTP server (your email
                provider&apos;s policy applies)
              </li>
            </ul>

            <h3>5.2 File Storage Providers</h3>
            <ul>
              <li>
                <strong>Azure Blob Storage:</strong> Microsoft Azure Privacy Statement applies
              </li>
              <li>
                <strong>AWS S3:</strong> Amazon Web Services Privacy Notice applies
              </li>
              <li>
                <strong>Cloudinary:</strong> Cloudinary Privacy Policy applies
              </li>
              <li>
                <strong>Local Storage:</strong> Files stored on your server infrastructure
              </li>
            </ul>

            <h3>5.3 Database Systems</h3>
            <ul>
              <li>
                <strong>SQL Server:</strong> Data stored in your configured database
              </li>
              <li>
                <strong>PostgreSQL:</strong> Data stored in your configured database
              </li>
            </ul>

            <h3>5.4 Caching and Tokens</h3>
            <ul>
              <li>
                <strong>Redis:</strong> If configured, authentication tokens may be cached
              </li>
              <li>
                <strong>In-Memory Storage:</strong> Default token storage (cleared on application
                restart)
              </li>
            </ul>
            <p>You are responsible for:</p>
            <ul>
              <li>Selecting appropriate service providers</li>
              <li>Configuring services securely</li>
              <li>Protecting API keys and credentials</li>
              <li>Understanding each provider&apos;s data handling practices</li>
            </ul>

            <h2>6. Security Features in Generated Code</h2>
            <p>Spiderly generates code with built-in security features:</p>
            <ul>
              <li>
                <strong>JWT Token Authentication:</strong> Secure token-based authentication
              </li>
              <li>
                <strong>Email Verification Codes:</strong> Time-limited verification for login
              </li>
              <li>
                <strong>Password-Free Authentication:</strong> Reduces password security risks
              </li>
              <li>
                <strong>Refresh Token Rotation:</strong> Automatic token renewal with rotation
              </li>
              <li>
                <strong>IP Address Tracking:</strong> Detects suspicious login locations
              </li>
              <li>
                <strong>Device Management:</strong> Users can manage trusted devices
              </li>
              <li>
                <strong>Rate Limiting:</strong> Prevents abuse and brute-force attacks
              </li>
              <li>
                <strong>Token Invalidation:</strong> Logout invalidates all user tokens
              </li>
            </ul>
            <p>However, security of your deployed application remains your responsibility.</p>

            <h2>7. License Verification</h2>
            <p>Spiderly.Security contains license token validation code. This validation:</p>
            <ul>
              <li>Occurs locally on your machine during development</li>
              <li>Does not transmit license information to external servers</li>
              <li>Does not track or monitor license usage</li>
              <li>Does not collect information about your projects</li>
            </ul>

            <h2>8. Logging and Diagnostics</h2>
            <p>Spiderly uses standard .NET logging mechanisms. Logs are:</p>
            <ul>
              <li>Written to your local console during code generation</li>
              <li>Not transmitted to external servers</li>
              <li>Under your control (you can disable or configure logging)</li>
            </ul>
            <p>Generated applications may use Serilog for logging. You configure:</p>
            <ul>
              <li>What information is logged</li>
              <li>Where logs are stored</li>
              <li>How long logs are retained</li>
              <li>Who has access to logs</li>
            </ul>

            <h2>9. Cookies and Local Storage</h2>
            <p>
              Spiderly itself does not use cookies or browser storage. However, generated Angular
              applications may use:
            </p>
            <ul>
              <li>
                <strong>Cookies:</strong> For storing JWT authentication tokens
              </li>
              <li>
                <strong>Local Storage:</strong> For caching data and application state
              </li>
              <li>
                <strong>Session Storage:</strong> For temporary session data
              </li>
            </ul>
            <p>
              You must disclose this in your application&apos;s privacy policy and obtain user
              consent where required.
            </p>

            <h2>10. Data Minimization</h2>
            <p>Spiderly&apos;s generated code follows data minimization principles:</p>
            <ul>
              <li>Collects only data necessary for functionality</li>
              <li>Tokens have expiration times</li>
              <li>Verification codes are time-limited</li>
              <li>Unused refresh tokens are automatically cleaned up</li>
            </ul>
            <p>You should extend these practices to your custom business logic.</p>

            <h2>11. Children&apos;s Privacy</h2>
            <p>
              Spiderly is a developer tool not directed at children under 13. If your generated
              application serves children, you must:
            </p>
            <ul>
              <li>Comply with COPPA (Children&apos;s Online Privacy Protection Act) in the US</li>
              <li>Comply with other applicable children&apos;s privacy laws</li>
              <li>Obtain parental consent where required</li>
              <li>Limit data collection appropriately</li>
            </ul>

            <h2>12. International Data Transfers</h2>
            <p>
              Spiderly operates locally and does not transfer data internationally. However, if your
              generated application serves international users:
            </p>
            <ul>
              <li>You are responsible for complying with international data transfer laws</li>
              <li>
                Consider using appropriate legal mechanisms (Standard Contractual Clauses, etc.)
              </li>
              <li>Disclose to users where their data is stored and processed</li>
              <li>Implement appropriate safeguards for cross-border transfers</li>
            </ul>

            <h2>13. Data Subject Rights</h2>
            <p>
              While Spiderly collects no data, your applications should respect user rights under
              privacy laws:
            </p>
            <ul>
              <li>
                <strong>Right to Access:</strong> Users can request their data
              </li>
              <li>
                <strong>Right to Rectification:</strong> Users can correct inaccurate data
              </li>
              <li>
                <strong>Right to Erasure:</strong> Users can request deletion (&quot;right to be
                forgotten&quot;)
              </li>
              <li>
                <strong>Right to Data Portability:</strong> Users can export their data
              </li>
              <li>
                <strong>Right to Object:</strong> Users can object to certain processing
              </li>
              <li>
                <strong>Right to Restrict Processing:</strong> Users can limit how data is used
              </li>
            </ul>
            <p>Implement these rights in your application&apos;s custom business logic.</p>

            <h2>14. Open Source Transparency</h2>
            <p>Spiderly is open source, which means:</p>
            <ul>
              <li>All source code is publicly available for inspection</li>
              <li>You can audit exactly how the Library works</li>
              <li>The community can review and contribute to security improvements</li>
              <li>There are no hidden data collection mechanisms</li>
            </ul>

            <h2>15. Updates to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy to reflect changes in the Library or legal
              requirements. Updates will be posted to:
            </p>
            <ul>
              <li>The Library&apos;s GitHub repository</li>
              <li>The NuGet package description (where applicable)</li>
            </ul>
            <p>
              Continued use of the Library after changes constitutes acceptance of the updated
              Privacy Policy.
            </p>

            <h2>16. Your Developer Obligations</h2>
            <p>As a developer using Spiderly, you commit to:</p>
            <ol>
              <li>
                <strong>Create Privacy Policies:</strong> Write appropriate privacy policies for
                applications you build
              </li>
              <li>
                <strong>Protect User Data:</strong> Implement security measures for data protection
              </li>
              <li>
                <strong>Comply with Laws:</strong> Follow applicable privacy and data protection
                laws
              </li>
              <li>
                <strong>Obtain Consent:</strong> Get user consent for data collection where required
              </li>
              <li>
                <strong>Handle Breaches:</strong> Have procedures for security breach notification
              </li>
              <li>
                <strong>Respect User Rights:</strong> Implement mechanisms for users to exercise
                their privacy rights
              </li>
              <li>
                <strong>Secure Credentials:</strong> Protect API keys, database passwords, and OAuth
                secrets
              </li>
              <li>
                <strong>Regular Updates:</strong> Keep dependencies and libraries up to date
              </li>
            </ol>

            <h2>17. Third-Party Libraries</h2>
            <p>
              Spiderly depends on third-party NuGet packages and NPM modules. Each has its own
              privacy characteristics:
            </p>
            <ul>
              <li>
                <strong>Entity Framework Core:</strong> Database ORM (Microsoft)
              </li>
              <li>
                <strong>FluentValidation:</strong> Validation library
              </li>
              <li>
                <strong>Azure.Storage.Blobs:</strong> Azure Blob Storage SDK (Microsoft)
              </li>
              <li>
                <strong>Google.Apis.Auth:</strong> Google authentication (Google)
              </li>
              <li>
                <strong>Angular:</strong> Frontend framework (Google)
              </li>
              <li>
                <strong>PrimeNG:</strong> UI component library
              </li>
              <li>
                <strong>Transloco:</strong> Internationalization library
              </li>
            </ul>
            <p>Review the privacy policies of libraries you use in your projects.</p>

            <h2>18. Contact and Questions</h2>
            <p>Spiderly is a free open-source project. For questions about this Privacy Policy:</p>
            <ul>
              <li>Open an issue on the GitHub repository</li>
              <li>Contact the maintainers through channels listed in the repository</li>
              <li>Review discussions in the project&apos;s community forums</li>
            </ul>
            <p>
              For privacy questions about applications built with Spiderly, contact the respective
              application developers (not the Spiderly maintainers).
            </p>

            <h2>19. Legal Basis for Processing (for Developers in EU/EEA)</h2>
            <p>
              If you are a developer in the EU/EEA, our legal basis for processing (which is
              minimal) is:
            </p>
            <ul>
              <li>
                <strong>Legitimate Interest:</strong> Providing an open-source development tool
              </li>
              <li>
                <strong>Consent:</strong> Your voluntary download and use of the Library
              </li>
            </ul>
            <p>
              For your applications, you must establish appropriate legal bases for processing user
              data.
            </p>

            <h2>20. Data Protection Officer</h2>
            <p>
              As Spiderly collects no personal data, we do not maintain a Data Protection Officer.
              However, if your application processes significant amounts of EU personal data, you
              may need to appoint a DPO.
            </p>

            <h2>21. Summary</h2>
            <p>
              <strong>For Spiderly Library Users (Developers):</strong>
            </p>
            <ul>
              <li>Spiderly collects zero data about you or your projects</li>
              <li>Everything operates locally on your machine</li>
              <li>No telemetry, analytics, or tracking</li>
              <li>Your code and data remain private</li>
            </ul>
            <p>
              <strong>For End Users of Applications Built with Spiderly:</strong>
            </p>
            <ul>
              <li>Contact the application developer for privacy questions</li>
              <li>The application developer is responsible for data protection</li>
              <li>Read the application&apos;s privacy policy (not this one)</li>
            </ul>

            <hr className="my-8" />

            <p className="text-sm text-muted-foreground">
              <strong>Last Updated:</strong> January 13, 2026
            </p>
            <p className="text-sm text-muted-foreground">
              <strong>Version:</strong> 1.0
            </p>
          </div>
        </AnimationContainer>
      </SectionContainer>
    </div>
  );
};

export default PrivacyPolicyPage;
