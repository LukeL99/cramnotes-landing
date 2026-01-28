import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate, spring, Sequence } from 'remotion';

// Step 1: Upload PDF
const UploadStep = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  const progress = spring({
    frame,
    fps,
    config: { damping: 12 },
  });
  
  const fileScale = spring({
    frame: frame - 20,
    fps,
    config: { damping: 15 },
  });

  return (
    <AbsoluteFill style={{ backgroundColor: '#F9FAFB', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 24,
      }}>
        <div style={{
          fontSize: 28,
          fontWeight: 600,
          color: '#4F46E5',
          opacity: progress,
          transform: `translateY(${interpolate(progress, [0, 1], [20, 0])}px)`,
        }}>
          Step 1: Upload Your PDF
        </div>
        
        <div style={{
          width: 300,
          height: 200,
          border: '3px dashed #D1D5DB',
          borderRadius: 16,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
          transform: `scale(${interpolate(progress, [0, 1], [0.8, 1])})`,
          opacity: progress,
        }}>
          <div style={{
            transform: `scale(${fileScale}) translateY(${interpolate(fileScale, [0, 1], [30, 0])}px)`,
            opacity: fileScale,
          }}>
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="2">
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
          </div>
          <div style={{
            marginTop: 12,
            fontSize: 16,
            color: '#6B7280',
            opacity: fileScale,
          }}>
            Biochemistry_Ch7.pdf
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// Step 2: Select Topics
const TopicsStep = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  const topics = ['Glycolysis', 'Citric Acid Cycle', 'Electron Transport'];
  
  return (
    <AbsoluteFill style={{ backgroundColor: '#F9FAFB', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 24,
      }}>
        <div style={{
          fontSize: 28,
          fontWeight: 600,
          color: '#4F46E5',
        }}>
          Step 2: Select Topics
        </div>
        
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
        }}>
          {topics.map((topic, i) => {
            const delay = i * 15;
            const checked = frame > delay + 20;
            const itemProgress = spring({
              frame: frame - delay,
              fps,
              config: { damping: 12 },
            });
            const checkProgress = spring({
              frame: frame - delay - 20,
              fps,
              config: { damping: 15 },
            });
            
            return (
              <div
                key={topic}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  padding: '12px 24px',
                  backgroundColor: 'white',
                  borderRadius: 8,
                  border: checked ? '2px solid #4F46E5' : '2px solid #E5E7EB',
                  transform: `translateX(${interpolate(itemProgress, [0, 1], [-50, 0])}px)`,
                  opacity: itemProgress,
                }}
              >
                <div style={{
                  width: 24,
                  height: 24,
                  borderRadius: 4,
                  backgroundColor: checked ? '#4F46E5' : 'white',
                  border: checked ? 'none' : '2px solid #D1D5DB',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transform: `scale(${checkProgress})`,
                }}>
                  {checked && (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  )}
                </div>
                <span style={{ fontSize: 18, color: '#374151' }}>{topic}</span>
              </div>
            );
          })}
        </div>
      </div>
    </AbsoluteFill>
  );
};

// Step 3: Processing
const ProcessingStep = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();
  
  const progress = interpolate(frame, [0, durationInFrames - 30], [0, 100], {
    extrapolateRight: 'clamp',
  });
  
  const pulseScale = 1 + Math.sin(frame * 0.2) * 0.05;
  
  return (
    <AbsoluteFill style={{ backgroundColor: '#F9FAFB', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 24,
      }}>
        <div style={{
          fontSize: 28,
          fontWeight: 600,
          color: '#4F46E5',
        }}>
          Step 3: AI Generating Notes
        </div>
        
        <div style={{
          width: 80,
          height: 80,
          borderRadius: '50%',
          backgroundColor: '#EEF2FF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transform: `scale(${pulseScale})`,
        }}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="2"
            style={{ transform: `rotate(${frame * 3}deg)` }}>
            <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
          </svg>
        </div>
        
        <div style={{
          width: 280,
          height: 12,
          backgroundColor: '#E5E7EB',
          borderRadius: 6,
          overflow: 'hidden',
        }}>
          <div style={{
            width: `${progress}%`,
            height: '100%',
            backgroundColor: '#4F46E5',
            borderRadius: 6,
          }} />
        </div>
        
        <div style={{ fontSize: 16, color: '#6B7280' }}>
          {progress < 30 ? 'Extracting text...' :
           progress < 60 ? 'Identifying key concepts...' :
           progress < 90 ? 'Generating exam questions...' :
           'Almost done!'}
        </div>
      </div>
    </AbsoluteFill>
  );
};

// Step 4: Notes Ready
const NotesReadyStep = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  const sections = [
    { icon: '📝', title: 'Key Concepts', color: '#4F46E5', items: 4 },
    { icon: '📖', title: 'Definitions', color: '#0EA5E9', items: 6 },
    { icon: '⚡', title: 'Quick Facts', color: '#10B981', items: 8 },
    { icon: '🎯', title: 'Exam Questions', color: '#F59E0B', items: 5 },
  ];
  
  const checkmarkScale = spring({
    frame: frame - 10,
    fps,
    config: { damping: 10, stiffness: 100 },
  });
  
  return (
    <AbsoluteFill style={{ backgroundColor: '#F9FAFB', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 24,
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 12,
        }}>
          <div style={{
            width: 48,
            height: 48,
            borderRadius: '50%',
            backgroundColor: '#10B981',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transform: `scale(${checkmarkScale})`,
          }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <div style={{
            fontSize: 28,
            fontWeight: 600,
            color: '#10B981',
          }}>
            Notes Ready!
          </div>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 12,
        }}>
          {sections.map((section, i) => {
            const delay = 20 + i * 10;
            const cardProgress = spring({
              frame: frame - delay,
              fps,
              config: { damping: 12 },
            });
            
            return (
              <div
                key={section.title}
                style={{
                  padding: '16px 20px',
                  backgroundColor: 'white',
                  borderRadius: 12,
                  borderLeft: `4px solid ${section.color}`,
                  boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                  transform: `scale(${cardProgress}) translateY(${interpolate(cardProgress, [0, 1], [20, 0])}px)`,
                  opacity: cardProgress,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ fontSize: 20 }}>{section.icon}</span>
                  <span style={{ fontSize: 16, fontWeight: 600, color: '#374151' }}>{section.title}</span>
                </div>
                <div style={{ fontSize: 14, color: '#6B7280', marginTop: 4 }}>
                  {section.items} items
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AbsoluteFill>
  );
};

// Main composition
export const DemoVideo = () => {
  return (
    <AbsoluteFill style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      <Sequence from={0} durationInFrames={90}>
        <UploadStep />
      </Sequence>
      <Sequence from={90} durationInFrames={90}>
        <TopicsStep />
      </Sequence>
      <Sequence from={180} durationInFrames={90}>
        <ProcessingStep />
      </Sequence>
      <Sequence from={270} durationInFrames={90}>
        <NotesReadyStep />
      </Sequence>
    </AbsoluteFill>
  );
};
