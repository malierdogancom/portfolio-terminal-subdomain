'use client';

import { useState, useRef, useEffect } from 'react';

interface Message {
    type: 'command' | 'output' | 'typewriter';
    content: string;
    id: number;
}

interface FileSystemNode {
    type: 'file' | 'directory';
    content?: string;
    children?: Record<string, FileSystemNode>;
}

// Simulated file system
const fileSystem: Record<string, FileSystemNode> = {
    'about.txt': {
        type: 'file',
        content: `╔══════════════════════════════════════════════════════════════╗
║                  MEHMET ALI ERDOĞAN - BIO                    ║
╚══════════════════════════════════════════════════════════════╝

Bilgisayar Mühendisliği Yüksek Lisans Öğrencisi
İstanbul Teknik Üniversitesi

Biyoinformatik alanında uzmanlaşan, hesaplamalı biyoloji ve 
metabolomik veri analizi üzerine çalışan bir araştırmacı ve 
yazılım geliştiriciyim.

Fullstack geliştirme ve veritabanı yönetimi konularındaki 
tecrübelerimi, biyoinformatik alanında yenilikçi çözümler 
üretmek için kullanıyorum.

📍 KONUM: Beylikdüzü, İstanbul
🎓 EĞİTİM: M.Sc. Computer Engineering (ITU)
🔬 ALAN: Bioinformatics & Computational Biology
💻 ROLE: Graduate Researcher @ TÜBİTAK

"Science and technology revolutionize our lives, 
 but memory, tradition and myth frame our response."
 - Arthur M. Schlesinger`,
    },
    'contact.md': {
        type: 'file',
        content: `╔══════════════════════════════════════════════════════════════╗
║                   CONTACT INFORMATION                        ║
╚══════════════════════════════════════════════════════════════╝

📧 Email:     malierdgnn@gmail.com
📱 Phone:     (533) 767 1624
🔗 GitHub:    github.com/MaliErdgn
💼 LinkedIn:  linkedin.com/in/malierdgnn
📍 Location:  Beylikdüzü, İstanbul, Turkey

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
AVAILABILITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Currently pursuing M.Sc. in Computer Engineering at ITU
Working as a Graduate Researcher at TÜBİTAK
Open to collaborations in bioinformatics and web development

Feel free to reach out for:
• Research collaborations
• Open source projects
• Bioinformatics consulting
• Full-stack development opportunities`,
    },
    'education.txt': {
        type: 'file',
        content: `╔══════════════════════════════════════════════════════════════╗
║                       EDUCATION                              ║
╚══════════════════════════════════════════════════════════════╝

🎓 M.Sc. Computer Engineering
   İstanbul Teknik Üniversitesi (ITU)
   2025 - Present
   Focus: Bioinformatics, Computational Biology

🎓 B.Sc. Computer Engineering
   Namık Kemal Üniversitesi
   2021 - 2025
   
🎓 B.Sc. Management Information Systems
   Anadolu Üniversitesi (Distance Education)
   2021 - 2024

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ACADEMIC ACHIEVEMENTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🏆 ALES Exam: 91.54/100 (2021)
🏆 YÖKDİL Exam: 91.25/100 (2023)
🏆 Best Presentation Award - HIBIT/RSG 18th International
   Symposium on Health Informatics and Bioinformatics (2025)`,
    },
    'projects': {
        type: 'directory',
        children: {
            'ai-chatbots.txt': {
                type: 'file',
                content: `PROJECT: Customized AI Chatbots (UN.GPT & kuran.stackia)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TECH STACK: React, Next.js, AWS, MySQL, OpenAI API

DESCRIPTION:
End-to-end AI chatbot platform built on OpenAI API with
custom knowledge base integration. Designed and developed
full-stack web interface with scalable architecture.

KEY FEATURES:
• Custom knowledge base integration
• Real-time conversational AI
• Scalable AWS infrastructure
• MySQL database for user management
• Responsive React/Next.js frontend

ROLE: Full-stack Developer & Architect`,
            },
            'finance-tracker.txt': {
                type: 'file',
                content: `PROJECT: Finance Tracking Web Application
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TECH STACK: Laravel, React, Docker, MySQL

DESCRIPTION:
Scalable web platform for budget management and expense
analysis using Docker containerization architecture.

KEY FEATURES:
• Budget tracking and visualization
• Expense categorization and analysis
• Docker-based deployment
• RESTful API with Laravel backend
• Interactive React frontend
• MySQL database with optimized queries

ROLE: Full-stack Developer`,
            },
            'terat-app.txt': {
                type: 'file',
                content: `PROJECT: Terat - Match Organization Platform
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TECH STACK: Flutter, Dart, Firebase

DESCRIPTION:
Comprehensive mobile application enabling users to create
teams and organize matches with real-time database.

KEY FEATURES:
• Team creation and management
• Match scheduling and organization
• Real-time Firebase integration
• Cross-platform (iOS & Android)
• User authentication and profiles
• Push notifications

ROLE: Mobile Developer

NOTE: Part of larger mobile app portfolio including finance
tracking, product comparison, and personal data tracking apps
built with Flutter and React Native.`,
            },
            'data-automation.txt': {
                type: 'file',
                content: `PROJECT: Programmatic Data Collection Script
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TECH STACK: JavaScript, Instagram API

DESCRIPTION:
Automated script for collecting and processing large-scale
follower/following data from Instagram APIs.

KEY FEATURES:
• Automated data collection
• API rate limiting handling
• Data normalization and processing
• Export to multiple formats
• Error handling and retry logic

ROLE: Script Developer & Data Engineer`,
            },
        },
    },
    'skills.txt': {
        type: 'file',
        content: `╔══════════════════════════════════════════════════════════════╗
║                    TECHNICAL SKILLS                          ║
╚══════════════════════════════════════════════════════════════╝

COMPUTATIONAL SCIENCES & DATA ANALYSIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  ▸ Bioinformatics Algorithms
  ▸ Metabolomic Data Analysis
  ▸ Machine Learning (Scikit-learn)
  ▸ Data Processing (Pandas, NumPy)
  ▸ Data Visualization (Matplotlib, Seaborn)

PROGRAMMING LANGUAGES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  ▸ Python              ████████████ Advanced
  ▸ JavaScript/TypeScript ████████████ Advanced
  ▸ SQL                 ████████████ Advanced
  ▸ Dart                ████████████ Advanced
  ▸ PHP                 ██████████░░ Intermediate
  ▸ C#                  ██████████░░ Intermediate
  ▸ C                   ████░░░░░░░░ Basic

WEB TECHNOLOGIES & FRAMEWORKS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  ▸ React.js            ████████████ Expert
  ▸ Next.js             ████████████ Expert
  ▸ Node.js             ████████████ Expert
  ▸ Laravel             ██████████░░ Advanced

MOBILE DEVELOPMENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  ▸ Flutter             ████████████ Advanced
  ▸ React Native        ██████████░░ Advanced
  ▸ .NET MAUI           ████████░░░░ Intermediate

DATABASES & CLOUD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  ▸ MySQL               ████████████ Advanced
  ▸ Firebase Firestore  ████████████ Advanced
  ▸ AWS                 ██████████░░ Advanced
  ▸ Docker              ██████████░░ Advanced

TOOLS & SYSTEMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  ▸ Git/GitHub          ████████████ Expert
  ▸ Linux (Pop!_OS, Ubuntu) ██████████░░ Advanced
  ▸ LaTeX               ████████░░░░ Intermediate`,
    },
    'experience.txt': {
        type: 'file',
        content: `╔══════════════════════════════════════════════════════════════╗
║                  WORK EXPERIENCE                             ║
╚══════════════════════════════════════════════════════════════╝

Graduate Researcher | TÜBİTAK
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
September 2025 - Present

• Working on "Alzheimer and Dementia Diagnosis, Prognosis 
  and Treatment: (Micro)RNA-Based and Computational 
  Approaches" project

• Conducting data analysis and modeling using bioinformatics 
  algorithms

• Developing computational tools for RNA analysis

• Collaborating with interdisciplinary research team


Software Engineering Intern | COMSIS Bilgisayar Ltd. Şti.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
July 2025 - August 2025

• Supported maintenance and development of PHP-based 
  e-commerce platforms

• Implemented UI improvements following web design principles

• Optimized database queries and backend performance


Software Engineering Intern | Haroon Technology
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
March 2025 - May 2025

• Contributed to development of PHP-based Customer 
  Relationship Management (CRM) system

• Wrote SQL queries and managed database operations

• Participated in code reviews and system optimization`,
    },
    'certifications.txt': {
        type: 'file',
        content: `╔══════════════════════════════════════════════════════════════╗
║                    CERTIFICATIONS                            ║
╚══════════════════════════════════════════════════════════════╝

BTK Akademisi (Turkish Ministry)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✓ Web Sitesi Kullanılabilirliği (2023)
  Website Usability

✓ Kariyerleri Tehdit Eden Yaklaşımlar (2023)
  Career Threatening Approaches

✓ Uygulamalı SQL Öğrenme (2023)
  Applied SQL Learning

✓ Python ile Makine Öğrenimi (2023)
  Machine Learning with Python

✓ Doğal Dil İşleme'ye Giriş (2023)
  Introduction to Natural Language Processing

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WORKSHOPS & CONFERENCES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✓ TUSEB - Dokuz Eylül Üniversitesi İzmir Genom Çalıştayı (2025)

✓ HIBIT/RSG - 18th International Symposium on Health 
  Informatics and Bioinformatics (2025)
  🏆 Best Presentation Award`,
    },
    'readme.md': {
        type: 'file',
        content: `╔══════════════════════════════════════════════════════════════╗
║            WELCOME TO MEHMET ALI'S TERMINAL                  ║
╚══════════════════════════════════════════════════════════════╝

Hi! I'm Mehmet Ali Erdoğan, a Computer Engineering M.Sc. 
student at Istanbul Technical University, specializing in 
bioinformatics and computational biology.

AVAILABLE COMMANDS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  • ls                - List all files
  • cat <file>        - Display file contents
  • help              - Show all commands
  • clear             - Clear terminal
  • whoami            - System information
  • sudo <cmd>        - Try it ;)

QUICK START:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  cat about.txt       - Learn about me
  cat education.txt   - View my education
  cat skills.txt      - See technical skills
  cat experience.txt  - Work experience
  cat contact.md      - Get in touch

TIPS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  • Use TAB for autocompletion
  • Use UP/DOWN arrows for command history
  • Click anywhere to focus input
  • Explore the projects/ directory!

Happy exploring! 🚀`,
    },
};

// Typewriter component for animated text
function TypewriterText({
    text,
    onComplete,
    scrollToBottom
}: {
    text: string;
    onComplete: () => void;
    scrollToBottom?: () => void;
}) {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const hasCompletedRef = useRef(false);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayText(prev => prev + text[currentIndex]);
                setCurrentIndex(prev => prev + 1);
                // Auto-scroll during typing - throttle to every few characters
                if (currentIndex % 5 === 0 && scrollToBottom) {
                    scrollToBottom();
                }
            }, 3); // Faster typewriter speed
            return () => clearTimeout(timeout);
        } else if (currentIndex === text.length && !hasCompletedRef.current) {
            hasCompletedRef.current = true;
            if (scrollToBottom) scrollToBottom();
            onComplete();
        }
    }, [currentIndex, text, onComplete, scrollToBottom]);

    return <pre className="whitespace-pre-wrap break-words">{displayText}</pre>;
}

export default function Terminal() {
    const [input, setInput] = useState('');
    const [history, setHistory] = useState<Message[]>([
        { type: 'output', content: 'Welcome to Hacker Terminal Portfolio v2.0.0', id: 0 },
        { type: 'output', content: 'Initializing retro-futuristic interface...', id: 1 },
        { type: 'output', content: 'Type "help" or "ls" to get started.', id: 2 },
        { type: 'output', content: '', id: 3 },
    ]);
    const [commandHistory, setCommandHistory] = useState<string[]>([]);
    const [historyIndex, setHistoryIndex] = useState(-1);
    const messageIdCounter = useRef(4);
    const [completingMessages, setCompletingMessages] = useState<Set<number>>(new Set());
    const inputRef = useRef<HTMLInputElement>(null);
    const terminalEndRef = useRef<HTMLDivElement>(null);

    // Scroll to bottom function
    const scrollToBottom = () => {
        terminalEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [history]);

    // Auto-focus input when typewriter completes or on mount
    useEffect(() => {
        if (completingMessages.size === 0) {
            inputRef.current?.focus();
        }
    }, [completingMessages]);

    const addMessage = (type: 'command' | 'output' | 'typewriter', content: string) => {
        const id = messageIdCounter.current++;
        setHistory(prev => [...prev, { type, content, id }]);
        if (type === 'typewriter') {
            setCompletingMessages(prev => new Set([...prev, id]));
        }
        return id;
    };

    const handleTypewriterComplete = (id: number) => {
        setCompletingMessages(prev => {
            const newSet = new Set(prev);
            newSet.delete(id);
            return newSet;
        });
    };

    const listDirectory = (): string => {
        const items = Object.keys(fileSystem).sort();
        let output = '';
        items.forEach(name => {
            const node = fileSystem[name];
            if (node.type === 'directory') {
                output += `📁 ${name}/\n`;
            } else {
                output += `📄 ${name}\n`;
            }
        });
        return output || 'Empty directory';
    };

    const readFile = (filename: string): string => {
        if (!(filename in fileSystem)) {
            return `cat: ${filename}: No such file or directory`;
        }
        const node = fileSystem[filename];
        if (node.type === 'directory') {
            return `cat: ${filename}: Is a directory`;
        }
        return node.content || '';
    };

    const handleTabCompletion = () => {
        const trimmed = input.trim();
        const parts = trimmed.split(' ');
        const lastPart = parts[parts.length - 1];

        if (!lastPart) return;

        const matches = Object.keys(fileSystem).filter(name =>
            name.startsWith(lastPart)
        );

        if (matches.length === 1) {
            const newParts = parts.slice(0, -1);
            newParts.push(matches[0]);
            setInput(newParts.join(' '));
        } else if (matches.length > 1) {
            addMessage('output', `\nPossible matches:\n${matches.join('  ')}`);
        }
    };

    const handleCommand = (cmd: string) => {
        const trimmedCmd = cmd.trim();

        addMessage('command', `$ ${cmd}`);

        if (trimmedCmd === '') {
            addMessage('output', '');
            return;
        }

        const parts = trimmedCmd.split(' ');
        const command = parts[0].toLowerCase();
        const args = parts.slice(1);

        // Easter egg for sudo
        if (command === 'sudo') {
            addMessage('typewriter', '🚨 ACCESS DENIED 🚨\nPermission denied: Nice try, but you\'re not root here.\n\n[SECURITY LOG] Unauthorized sudo attempt detected.\nIncident reported to the mainframe... just kidding! 😎');
            return;
        }

        switch (command) {
            case 'help':
                addMessage('typewriter', `╔══════════════════════════════════════════════════════════════╗
║                    AVAILABLE COMMANDS                        ║
╚══════════════════════════════════════════════════════════════╝

FILE SYSTEM:
  • ls              - List all files and directories
  • cat <file>      - Display contents of a file
  
NAVIGATION:
  • help            - Show this help message
  • clear           - Clear the terminal screen

EXTRAS:
  • sudo <cmd>      - Try it ;)

SHORTCUTS:
  • TAB             - Autocomplete file names
  • UP/DOWN         - Navigate command history
  • Click anywhere  - Focus input

TIP: Try 'ls' to see available files, then 'cat <filename>' to read them!`);
                break;

            case 'ls':
                addMessage('typewriter', listDirectory());
                break;

            case 'cat':
                if (args.length === 0) {
                    addMessage('output', 'Usage: cat <filename>');
                } else {
                    addMessage('typewriter', readFile(args[0]));
                }
                break;

            case 'clear':
                setHistory([]);
                break;

            case 'whoami':
                addMessage('typewriter', 'You are: visitor@matrix.terminal\nAccess Level: Guest\nIP: 127.0.0.1 (localhost)');
                break;

            case 'date':
                addMessage('output', new Date().toLocaleString());
                break;

            case 'pwd':
                addMessage('output', '/home/visitor/portfolio');
                break;

            default:
                // Check if it's a directory name
                if (fileSystem[trimmedCmd]?.type === 'directory') {
                    addMessage('output', `bash: ${trimmedCmd}: Is a directory\nTip: Use 'cat ${trimmedCmd}/<filename>' or 'ls' to explore.`);
                } else {
                    addMessage('output', `Command not found: ${command}\nType "help" for available commands.`);
                }
        }

        setCommandHistory(prev => [...prev, cmd]);
        setHistoryIndex(-1);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (input.trim() && completingMessages.size === 0) {
            handleCommand(input);
            setInput('');
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Tab') {
            e.preventDefault();
            handleTabCompletion();
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (commandHistory.length > 0) {
                const newIndex = historyIndex === -1
                    ? commandHistory.length - 1
                    : Math.max(0, historyIndex - 1);
                setHistoryIndex(newIndex);
                setInput(commandHistory[newIndex]);
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (historyIndex !== -1) {
                const newIndex = historyIndex + 1;
                if (newIndex >= commandHistory.length) {
                    setHistoryIndex(-1);
                    setInput('');
                } else {
                    setHistoryIndex(newIndex);
                    setInput(commandHistory[newIndex]);
                }
            }
        }
    };

    return (
        <div
            className="terminal-container"
            onClick={() => inputRef.current?.focus()}
        >
            <div className="terminal-header">
                <div className="terminal-buttons">
                    <span className="terminal-button terminal-button-close"></span>
                    <span className="terminal-button terminal-button-minimize"></span>
                    <span className="terminal-button terminal-button-maximize"></span>
                </div>
                <div className="terminal-title">root@matrix:~/portfolio</div>
            </div>

            <div className="terminal-body">
                {history.map((msg) => (
                    <div key={msg.id} className={msg.type === 'command' ? 'terminal-command' : 'terminal-output'}>
                        {msg.type === 'typewriter' ? (
                            <TypewriterText
                                text={msg.content}
                                onComplete={() => handleTypewriterComplete(msg.id)}
                                scrollToBottom={scrollToBottom}
                            />
                        ) : (
                            <pre className="whitespace-pre-wrap break-words">{msg.content}</pre>
                        )}
                    </div>
                ))}

                <form onSubmit={handleSubmit} className="terminal-input-line">
                    <span className="terminal-prompt">$</span>
                    <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="terminal-input"
                        autoFocus
                        spellCheck={false}
                        disabled={completingMessages.size > 0}
                    />
                    {completingMessages.size > 0 && (
                        <span className="terminal-cursor-blink">▊</span>
                    )}
                </form>
                <div ref={terminalEndRef} />
            </div>
        </div>
    );
}
