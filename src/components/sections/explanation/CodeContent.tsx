import { ReactNode } from 'react';

interface CodeContentProps {
  properties: Array<{
    name: string;
    type: string;
    attributes?: Array<{ name: string; value?: string }>;
  }>;
  isTriggered: boolean;
  children?: ReactNode;
}

export const CodeContent = ({ properties, isTriggered, children }: CodeContentProps) => {
  return (
    <div className="p-6 font-mono text-sm text-nowrap">
      <div className="space-y-1">
        <div className="text-purple-400">
          <span className="text-blue-400">public class</span>{' '}
          <span className="text-yellow-300">Product</span>
        </div>
        <div className="text-white">{'{'}</div>

        {/* Properties */}
        {properties.map((prop, index) => (
          <div key={index}>
            <div
              className={`ml-4 transition-all duration-300 ${
                index === 0
                  ? 'opacity-100 translate-y-0'
                  : isTriggered
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-2'
              }`}
              style={{ transitionDelay: index === 0 ? '0ms' : `${(index - 1) * 150}ms` }}
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

        {/* Add Properties Button - shows after first property but before other properties are added */}
        {!isTriggered && (
          <div className="ml-4 my-4">
            <div className="h-2" />
            {children}
          </div>
        )}

        <div className="text-white">{'}'}</div>
      </div>
    </div>
  );
};
