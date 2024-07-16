/**
 * v0 by Vercel.
 * @see https://v0.dev/t/fnpXLFAOX60
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export default function TextareaDisabled() {
  return (
    <div className="flex flex-col items-center justify-between ">
      <div className="flex flex-row items-center justify-between p-20">
        <h1 className="text-xl font-extrabold tracking-tight lg:text-3xl">
        🎉Congrats! You just saved 30 minutes. 
        </h1>
      </div>
      <div className="bg-background rounded-lg border p-6">
        <div className="flex items-end justify-end">
          <Button
            variant="ghost"
            size="icon"
            className="text-muted-foreground hover:bg-muted/50"
          >
            <CopyIcon className="w-5 h-5" />
            <span className="sr-only">Copy</span>
          </Button>
        </div>
        <div className="px-4 py-6 md:px-6 lg:py-16 md:py-12">
          <div className="prose prose-gray mx-auto dark:prose-invert">
            <h2 className="">
              Incident retrospective: AWS Gateway saturation outage 
            </h2>
            <p className="text-muted-foreground">
              Service Component and Platform Issues
            </p>
            <ul>
              <li className="list-disc">
                <strong>Service Component</strong>: Web tier, provision-service,
                monitoring dashboard.
              </li>
              <li className="list-disc">
                <strong>Platform</strong>: AWS Transit Gateways (TGWs).
              </li>
            </ul>

            <p className="text-muted-foreground">
              User and Dependencies Impact
            </p>
            <ul>
              <li className="list-disc">
                Widespread network degradation led to increased packet loss and
                higher latency.
              </li>
              <li className="list-disc">
                Web tier saturation caused Slack to become unavailable.
              </li>
              <li className="list-disc">
                Engineers faced difficulties due to automated downscaling and
                SSH session disruptions.
              </li>
            </ul>

            <p className="text-muted-foreground">Timestamps</p>
            <ul>
              <li className="list-disc">
                <strong>6:57am PST</strong>: 99% of Slack messages sent
                successfully.
              </li>
              <li className="list-disc">
                <strong>7:01am-7:15am PST</strong>: Attempt to add 1,200 servers
                to the web tier.
              </li>
              <li className="list-disc">
                <strong>8:15am PST</strong>: Provision-service back in
                operation.
              </li>
              <li className="list-disc">
                <strong>9:15am PST</strong>: Slack degraded but operational.
              </li>
              <li className="list-disc">
                <strong>10:40am PST</strong>: Network returned to normal.
              </li>
            </ul>

            <p className="text-muted-foreground">Root Causes</p>
            <ol>
              <li className="list-disc">Saturation of AWS Transit Gateway.</li>
              <li className="list-disc">
                Network degradation and packet loss.
              </li>
              <li className="list-disc">
                Provision-service hitting resource bottlenecks.
              </li>
              <li className="list-disc">
                Inadequate autoscaling configurations.
              </li>
            </ol>

            <p className="text-muted-foreground">Actions and Consequences</p>
            <ul>
              <li className="list-disc">Rolled back changes (ineffective).</li>
              <li className="list-disc">
                Engaged AWS support to address network issues.
              </li>
              <li className="list-disc">
                Disabled downscaling to preserve serving capacity.
                <div className="rounded-md overflow-auto">
                  <pre className="p-4 font-mono text-sm whitespace-pre-wrap break-all">
                    <code>{`behavior:
  scaleDown:
    selectPolicy: Disabled
                `}</code>
                  </pre>
                </div>
              </li>
              <li className="list-disc">
                Provision-service repairs improved instance provisioning.
              </li>
              <li className="list-disc">
                Preemptive TGW upscaling reminder set for future holidays.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

}


function CopyIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  )
}


function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}