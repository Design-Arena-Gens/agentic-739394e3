import { useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [selectedType, setSelectedType] = useState('brainrot');
  const [generatedIdeas, setGeneratedIdeas] = useState([]);
  const [loading, setLoading] = useState(false);

  const contentTypes = {
    brainrot: {
      name: '🧠 Brainrot Videos',
      emoji: '🔥',
      color: '#ff6b6b'
    },
    animan: {
      name: '⚡ Animan Edits',
      emoji: '💀',
      color: '#4ecdc4'
    },
    saving: {
      name: '💾 Saving Videos',
      emoji: '🎬',
      color: '#95e1d3'
    },
    sigma: {
      name: '😎 Sigma Edits',
      emoji: '🗿',
      color: '#f38181'
    },
    meme: {
      name: '😂 Meme Videos',
      emoji: '🤣',
      color: '#aa96da'
    }
  };

  const viralIdeas = {
    brainrot: [
      {
        title: "Skibidi Toilet meets Indian Uncles",
        prompt: "Indian uncle dancing with skibidi toilet head, market background, ultra realistic",
        videoIdea: "AI-generated video of desi uncles doing skibidi dance in local market",
        tools: "Leonardo.ai for images, Runway ML for animation",
        hook: "POV: When chacha ji discovers skibidi toilet 💀",
        music: "Skibidi Toilet Remix + Desi Dhol beats"
      },
      {
        title: "Rizzler Sharma Office Edition",
        prompt: "Indian office guy with sigma face, glowing eyes, suit, dramatic lighting",
        videoIdea: "Office wale Sharma ji showing ultimate rizz to boss",
        tools: "Midjourney for face, CapCut for editing",
        hook: "When Sharma ji uses 0.001% rizz in office meeting 🔥",
        music: "Phonk music + Office background sounds"
      },
      {
        title: "Gyatt Gully Boy",
        prompt: "Indian street food vendor with dramatic Chad face transformation",
        videoIdea: "Pani puri wala turning into ultimate sigma male",
        tools: "Stable Diffusion + D-ID for face animation",
        hook: "Bhaiya ne sirf pani puri nahi, rizz bhi diya 💀",
        music: "Gully Boy theme + Phonk"
      },
      {
        title: "Ohio Aunty Gossip",
        prompt: "Indian aunty with glitching reality effects, dramatic zoom",
        videoIdea: "Society aunty spreading Ohio-level weird gossip",
        tools: "Pika Labs for video, AI voice generator",
        hook: "When colony aunty enters Ohio dimension 🌀",
        music: "Eerie music + Indian soap opera sounds"
      },
      {
        title: "Fanum Tax Chai Wala",
        prompt: "Chai wala stealing chai cups with sigma energy, slow motion",
        videoIdea: "Roadside chai wala doing fanum tax on customers",
        tools: "Leonardo.ai + Runway Gen-2",
        hook: "Chaiwala invented fanum tax before it was cool 😎",
        music: "Phonk + Cutting chai sounds"
      },
      {
        title: "Mogged by Pandit Ji",
        prompt: "Pandit doing puja with ultra gigachad aura, golden light",
        videoIdea: "Pandit ji mogging everyone with spiritual rizz",
        tools: "Midjourney + CapCut Pro",
        hook: "When pandit ji's aura is too strong 🕉️✨",
        music: "Temple bells + Sigma theme"
      }
    ],
    animan: {
      title: "Animan Face Morphs",
      prompt: "Indian celebrities transforming into animan face with dramatic music",
      videoIdea: "Bollywood stars getting animan treatment",
      tools: "Reface app + CapCut",
      hook: "Animan face reveal but it's SRK 💀",
      music: "Animan sound effect"
    },
    saving: [
      {
        title: "Sigma Male Morning Routine",
        prompt: "Muscular Indian man doing extreme morning workout, cinematic",
        videoIdea: "Desi sigma male waking up at 4 AM, cold shower, pushups",
        tools: "Leonardo.ai + Runway ML",
        hook: "Real sigmas follow this routine 🗿",
        music: "Aggressive phonk music"
      },
      {
        title: "How to Mog Everyone",
        prompt: "Transformation from average to gigachad Indian man, before/after",
        videoIdea: "Complete mogging guide with AI visuals",
        tools: "Stable Diffusion + D-ID",
        hook: "Follow this to mog your entire college 💪",
        music: "Motivational sigma music"
      },
      {
        title: "Ancient Indian Wisdom = Sigma",
        prompt: "Ancient Indian sage with modern sigma overlay, wisdom quotes",
        videoIdea: "Showing how Chanakya was original sigma",
        tools: "Midjourney + CapCut",
        hook: "Our ancestors were the real sigmas 🔱",
        music: "Flute + Modern phonk fusion"
      },
      {
        title: "Rejection to Success Story",
        prompt: "Guy getting rejected then becoming ultra successful, glow up",
        videoIdea: "Motivational arc with dramatic transformation",
        tools: "Leonardo.ai + Pika Labs",
        hook: "They laughed at him, now he owns the company 🚀",
        music: "Sad to epic transition music"
      },
      {
        title: "Stop Wasting Time Guide",
        prompt: "Clock with dramatic effects, productivity symbols, intense visuals",
        videoIdea: "Aggressive productivity motivation with AI visuals",
        tools: "Runway Gen-2 + CapCut",
        hook: "You're wasting your life. Here's how to fix it ⏰",
        music: "Dramatic countdown music"
      }
    ],
    sigma: [
      {
        title: "Desi Gigachad Transformation",
        prompt: "Indian man transforming into ultimate gigachad, lightning effects",
        videoIdea: "Regular desi guy unlocking inner sigma",
        tools: "Midjourney + Reface",
        hook: "When you unlock 0.01% of your power 💀",
        music: "Gigachad theme"
      },
      {
        title: "Sigma Grindset Indian Edition",
        prompt: "Multiple screens showing hustling, gym, study, all at once",
        videoIdea: "Extreme multitasking sigma male routine",
        tools: "Leonardo.ai + CapCut layers",
        hook: "Real sigmas don't choose. They do everything 🗿",
        music: "Hard phonk music"
      },
      {
        title: "Patrick Bateman but Indian",
        prompt: "Indian businessman in suit doing Bateman routine, mirror scene",
        videoIdea: "Americam Psycho morning routine desi version",
        tools: "D-ID + CapCut editing",
        hook: "Desi Patrick Bateman morning routine 🔪",
        music: "Hip to be Square Remix"
      },
      {
        title: "Beta vs Sigma Comparison",
        prompt: "Split screen showing beta behavior vs sigma behavior, Indian context",
        videoIdea: "Side by side comparison of mindsets",
        tools: "Stable Diffusion + Video editing",
        hook: "Which one are you? 🤔",
        music: "Contrasting music styles"
      }
    ],
    meme: [
      {
        title: "Indian Parents AI Roast",
        prompt: "AI generated Indian parents with disappointed expressions, dramatic",
        videoIdea: "AI parents giving typical desi parent dialogues",
        tools: "D-ID + AI voice cloning",
        hook: "POV: You scored 99% instead of 100% 💀",
        music: "Sad violin"
      },
      {
        title: "Tuition Teacher Multiverse",
        prompt: "Same tuition teacher in different universes, variants",
        videoIdea: "Sharma sir across the multiverse",
        tools: "Midjourney + CapCut",
        hook: "Tuition teacher in every universe be like: 📚",
        music: "Multiverse theme"
      },
      {
        title: "Biryani Reaction Faces",
        prompt: "Extreme facial expressions eating biryani, dramatic zoom",
        videoIdea: "Compilation of AI faces eating biryani first time",
        tools: "Leonardo.ai + Face animation",
        hook: "When biryani hits different 🍛✨",
        music: "Heavenly music"
      },
      {
        title: "Engineer vs Arts Student",
        prompt: "Two different people, one stressed engineer one chilled arts student",
        videoIdea: "Comparing life of engineer vs arts through AI",
        tools: "Stable Diffusion + Editing",
        hook: "Choose your fighter 🎓",
        music: "Split screen different moods"
      }
    ]
  };

  const generateIdeas = () => {
    setLoading(true);
    setTimeout(() => {
      const ideas = viralIdeas[selectedType];
      setGeneratedIdeas(Array.isArray(ideas) ? ideas : [ideas]);
      setLoading(false);
    }, 1000);
  };

  return (
    <>
      <Head>
        <title>Viral Content Generator - AI se Viral Ban Jao 🔥</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div style={styles.container}>
        <div style={styles.header}>
          <h1 style={styles.title}>🔥 VIRAL CONTENT GENERATOR 🔥</h1>
          <p style={styles.subtitle}>AI se bana apna viral video - Brainrot, Animan, Sigma, sab kuch!</p>
        </div>

        <div style={styles.typeSelector}>
          {Object.entries(contentTypes).map(([key, type]) => (
            <button
              key={key}
              onClick={() => setSelectedType(key)}
              style={{
                ...styles.typeButton,
                backgroundColor: selectedType === key ? type.color : '#2d2d2d',
                transform: selectedType === key ? 'scale(1.05)' : 'scale(1)',
              }}
            >
              <div style={styles.typeEmoji}>{type.emoji}</div>
              <div style={styles.typeName}>{type.name}</div>
            </button>
          ))}
        </div>

        <button onClick={generateIdeas} style={styles.generateButton} disabled={loading}>
          {loading ? '⏳ Generate ho raha hai...' : '✨ Viral Ideas Generate Karo'}
        </button>

        {generatedIdeas.length > 0 && (
          <div style={styles.ideasContainer}>
            <h2 style={styles.ideasTitle}>🎯 Tere Liye Viral Ideas:</h2>
            {generatedIdeas.map((idea, index) => (
              <div key={index} style={styles.ideaCard}>
                <h3 style={styles.ideaTitle}>💡 {idea.title}</h3>

                <div style={styles.ideaSection}>
                  <strong style={styles.label}>🎬 Video Idea:</strong>
                  <p style={styles.text}>{idea.videoIdea}</p>
                </div>

                <div style={styles.ideaSection}>
                  <strong style={styles.label}>🎨 AI Image Prompt:</strong>
                  <p style={styles.prompt}>{idea.prompt}</p>
                </div>

                <div style={styles.ideaSection}>
                  <strong style={styles.label}>🛠️ Tools Use Kar:</strong>
                  <p style={styles.text}>{idea.tools}</p>
                </div>

                <div style={styles.ideaSection}>
                  <strong style={styles.label}>🪝 Hook/Title:</strong>
                  <p style={styles.hook}>{idea.hook}</p>
                </div>

                <div style={styles.ideaSection}>
                  <strong style={styles.label}>🎵 Background Music:</strong>
                  <p style={styles.text}>{idea.music}</p>
                </div>

                <div style={styles.steps}>
                  <strong style={styles.label}>📝 Steps to Create:</strong>
                  <ol style={styles.stepsList}>
                    <li>Upar diye prompt ko Leonardo.ai ya Midjourney me paste kar</li>
                    <li>Best image select kar (2-3 variations try kar)</li>
                    <li>Image ko Runway ML ya Pika Labs me animate kar</li>
                    <li>CapCut me edit kar - effects, zoom, transitions add kar</li>
                    <li>Background music add kar (loud aur catchy)</li>
                    <li>Hook text animation add kar (bold font, shake effect)</li>
                    <li>9:16 ratio me export kar (Reels/Shorts ke liye)</li>
                    <li>Post kar Instagram/YouTube par optimal timing pe</li>
                  </ol>
                </div>

                <div style={styles.tips}>
                  <strong style={styles.label}>💰 Viral Tips:</strong>
                  <ul style={styles.tipsList}>
                    <li>First 3 seconds me best part dikha</li>
                    <li>Trending sound use kar (check trending tab)</li>
                    <li>Peak time pe post kar (7-9 PM)</li>
                    <li>Hashtags: #brainrot #sigma #viral #aiart #trending</li>
                    <li>Thumbnail eye-catching rakho</li>
                    <li>Reply kar sabhi comments ko (engagement badhao)</li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}

        <div style={styles.toolsSection}>
          <h2 style={styles.toolsTitle}>🛠️ Free AI Tools List:</h2>
          <div style={styles.toolsGrid}>
            <div style={styles.toolCard}>
              <h4>🎨 Image Generation</h4>
              <ul style={styles.toolList}>
                <li>Leonardo.ai (Free daily credits)</li>
                <li>Bing Image Creator (Unlimited free)</li>
                <li>Playground AI</li>
                <li>Stable Diffusion (Local/Free)</li>
              </ul>
            </div>
            <div style={styles.toolCard}>
              <h4>🎬 Video/Animation</h4>
              <ul style={styles.toolList}>
                <li>Runway ML (Free tier)</li>
                <li>Pika Labs (Discord free)</li>
                <li>CapCut (Completely free)</li>
                <li>D-ID (Free credits)</li>
              </ul>
            </div>
            <div style={styles.toolCard}>
              <h4>🎵 Music/Sound</h4>
              <ul style={styles.toolList}>
                <li>Suno AI (Music generation)</li>
                <li>Epidemic Sound (Trial)</li>
                <li>YouTube Audio Library (Free)</li>
                <li>Pixabay Music (Free)</li>
              </ul>
            </div>
            <div style={styles.toolCard}>
              <h4>✍️ Text/Voice</h4>
              <ul style={styles.toolList}>
                <li>ElevenLabs (Free voices)</li>
                <li>ChatGPT (Script writing)</li>
                <li>Descript (Transcription)</li>
                <li>Uberduck (Voice cloning)</li>
              </ul>
            </div>
          </div>
        </div>

        <div style={styles.footer}>
          <p>🚀 Ab jaa aur viral ban! Pro tips follow kar aur consistent reh.</p>
          <p style={styles.footerSmall}>Refresh kar naye ideas ke liye 🔄</p>
        </div>
      </div>
    </>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#0a0a0a',
    color: '#ffffff',
    padding: '20px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px',
    paddingTop: '20px',
  },
  title: {
    fontSize: '3rem',
    fontWeight: '900',
    background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4, #95e1d3)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: '10px',
    textShadow: '0 0 30px rgba(255,107,107,0.5)',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#cccccc',
    fontWeight: '500',
  },
  typeSelector: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '15px',
    maxWidth: '1000px',
    margin: '0 auto 40px',
  },
  typeButton: {
    padding: '20px',
    border: 'none',
    borderRadius: '15px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
  },
  typeEmoji: {
    fontSize: '2rem',
    marginBottom: '8px',
  },
  typeName: {
    fontSize: '0.9rem',
    fontWeight: '600',
    color: '#ffffff',
  },
  generateButton: {
    display: 'block',
    margin: '0 auto 50px',
    padding: '18px 50px',
    fontSize: '1.3rem',
    fontWeight: '700',
    background: 'linear-gradient(45deg, #ff6b6b, #ee5a6f)',
    color: '#ffffff',
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    boxShadow: '0 8px 25px rgba(255,107,107,0.4)',
    transition: 'all 0.3s ease',
  },
  ideasContainer: {
    maxWidth: '900px',
    margin: '0 auto',
  },
  ideasTitle: {
    fontSize: '2rem',
    textAlign: 'center',
    marginBottom: '30px',
    color: '#4ecdc4',
  },
  ideaCard: {
    backgroundColor: '#1a1a1a',
    borderRadius: '20px',
    padding: '30px',
    marginBottom: '30px',
    boxShadow: '0 8px 30px rgba(0,0,0,0.5)',
    border: '2px solid #2d2d2d',
  },
  ideaTitle: {
    fontSize: '1.6rem',
    color: '#ff6b6b',
    marginBottom: '20px',
    fontWeight: '700',
  },
  ideaSection: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    color: '#4ecdc4',
    fontSize: '1.1rem',
    marginBottom: '8px',
    fontWeight: '600',
  },
  text: {
    color: '#cccccc',
    fontSize: '1rem',
    lineHeight: '1.6',
    margin: '0',
  },
  prompt: {
    backgroundColor: '#0d0d0d',
    padding: '15px',
    borderRadius: '10px',
    color: '#95e1d3',
    fontSize: '0.95rem',
    fontFamily: 'monospace',
    border: '1px solid #2d2d2d',
  },
  hook: {
    color: '#f38181',
    fontSize: '1.1rem',
    fontWeight: '600',
    fontStyle: 'italic',
  },
  steps: {
    marginTop: '25px',
    backgroundColor: '#111111',
    padding: '20px',
    borderRadius: '12px',
  },
  stepsList: {
    color: '#cccccc',
    lineHeight: '1.8',
    paddingLeft: '20px',
  },
  tips: {
    marginTop: '20px',
    backgroundColor: '#0d0d0d',
    padding: '20px',
    borderRadius: '12px',
    border: '1px solid #ff6b6b',
  },
  tipsList: {
    color: '#cccccc',
    lineHeight: '1.8',
    paddingLeft: '20px',
  },
  toolsSection: {
    maxWidth: '1200px',
    margin: '60px auto 40px',
    padding: '30px',
    backgroundColor: '#1a1a1a',
    borderRadius: '20px',
  },
  toolsTitle: {
    fontSize: '2rem',
    textAlign: 'center',
    marginBottom: '30px',
    color: '#95e1d3',
  },
  toolsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
  },
  toolCard: {
    backgroundColor: '#0d0d0d',
    padding: '20px',
    borderRadius: '15px',
    border: '1px solid #2d2d2d',
  },
  toolList: {
    color: '#cccccc',
    lineHeight: '1.8',
    paddingLeft: '20px',
    marginTop: '15px',
  },
  footer: {
    textAlign: 'center',
    marginTop: '60px',
    paddingTop: '30px',
    borderTop: '1px solid #2d2d2d',
  },
  footerSmall: {
    color: '#666666',
    fontSize: '0.9rem',
    marginTop: '10px',
  },
};
