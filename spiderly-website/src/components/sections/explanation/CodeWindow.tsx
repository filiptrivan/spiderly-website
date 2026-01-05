import { Button } from '@/components/ui/button';
import { CodeIcon, Undo2 } from 'lucide-react';

interface CodeWindowProps {
  isTriggered: boolean;
  onAddProperties: () => void;
  onUndo?: () => void;
  properties: Array<{
    name: string;
    type: string;
    attributes?: Array<{ name: string; value?: string }>;
  }>;
  className?: string;
}

export const CodeWindow = ({
  isTriggered,
  onAddProperties,
  onUndo,
  properties,
  className = '',
}: CodeWindowProps) => {
  return (
    <div className={className}>
      {/* Code Header */}
      <div className="flex items-center justify-between px-4 h-10 border-b border-border bg-foreground/5 text-muted-foreground">
        <div className="flex items-center gap-2 text-sm">
          <CodeIcon className="w-4 h-4" />
          <span>Product.cs</span>
        </div>
        {isTriggered && onUndo && (
          <Button onClick={onUndo} variant="ghost" size="sm" className="gap-1.5 h-7 text-xs">
            <Undo2 className="w-3.5 h-3.5" />
            Undo
          </Button>
        )}
      </div>

      {/* Code Content */}
      <div className="p-6 font-mono text-sm text-nowrap">
        <div className="space-y-1">
          <div className="text-purple-400">
            <span className="text-blue-400">public class</span>{' '}
            <span className="text-yellow-300">Product</span>
          </div>
          <div className="text-white">{'{'}</div>

          {/* Properties */}
          {properties.length === 0 && !isTriggered && (
            <div className="ml-4 my-4">
              <Button
                onClick={onAddProperties}
                variant="primary"
                size="sm"
                className="w-full animate-pulse"
              >
                Add Dummy Properties
              </Button>
            </div>
          )}

          {properties.map((prop, index) => (
            <div key={index}>
              <div
                className={`ml-4 transition-all duration-300 ${
                  isTriggered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {prop.attributes && prop.attributes.length > 0 && (
                  <div className="text-gray-500">
                    {prop.attributes.map((attr, attrIndex) => (
                      <div key={attrIndex}>
                        [<span className="text-cyan-400">{attr.name}</span>
                        {attr.value && (
                          <>
                            (<span className="text-orange-400">&quot;{attr.value}&quot;</span>)
                          </>
                        )}
                        ]
                      </div>
                    ))}
                  </div>
                )}
                <div>
                  <span className="text-blue-400">public</span>{' '}
                  <span className="text-green-400">{prop.type}</span>{' '}
                  <span className="text-white">{prop.name}</span>{' '}
                  <span className="text-purple-400">{'{ get; set; }'}</span>
                </div>
              </div>
              {index < properties.length - 1 && <div className="h-2" />}
            </div>
          ))}

          <div className="text-white">{'}'}</div>
        </div>
      </div>
    </div>
  );
};
