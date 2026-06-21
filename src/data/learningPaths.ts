export const LEARNING_CATEGORIES: Record<string, string[]> = {
  'Web Security': [
    'SQL Injection',
    'Blind SQL Injection',
    'XSS (Reflected)',
    'XSS (Stored)',
    'XSS (DOM)',
    'CSRF',
    'IDOR',
    'File Upload',
    'Directory Traversal',
    'Open Redirect',
    'Authentication Bypass',
    'Session Hijacking',
    'JWT Security',
    'Cookie Security',
    'SSRF',
    'XXE',
    'Clickjacking',
    'API Security',
    'GraphQL Security',
    'WebSocket Security',
  ],
  'Network Security': [
    'Port Scanning',
    'Banner Grabbing',
    'DNS Enumeration',
    'Packet Analysis',
    'TCP Handshake',
    'Firewall Rules',
    'IDS/IPS',
  ],
  Cryptography: [
    'Base64',
    'Caesar Cipher',
    'SHA256',
    'AES',
    'RSA',
    'HMAC',
    'Salting',
    'Rainbow Tables',
    'Digital Signatures',
  ],
  'Reverse Engineering': [
    'Assembly Basics',
    'String Extraction',
    'ELF Analysis',
    'PE Analysis',
    'Function Flow',
    'Hex Editor',
  ],
  'Binary Exploitation': [
    'Buffer Overflow',
    'Stack Visualization',
    'Heap Visualization',
    'ROP Chains',
    'ASLR',
    'DEP/NX',
    'Format Strings',
    'Integer Overflow',
  ],
};

export const LABS_DATA = {
  web: [
    { id: 'sql-injection-lab', name: 'SQL Injection Lab', difficulty: 'Beginner', xp: 100 },
    { id: 'xss-lab', name: 'XSS Exploitation', difficulty: 'Intermediate', xp: 150 },
    { id: 'csrf-lab', name: 'CSRF Vulnerabilities', difficulty: 'Beginner', xp: 100 },
    { id: 'auth-bypass', name: 'Authentication Bypass', difficulty: 'Advanced', xp: 200 },
  ],
  network: [
    { id: 'nmap-sim', name: 'Network Scanning', difficulty: 'Beginner', xp: 80 },
    { id: 'packet-analysis', name: 'Packet Analysis', difficulty: 'Intermediate', xp: 120 },
  ],
  crypto: [
    { id: 'rsa-crack', name: 'RSA Cracking', difficulty: 'Advanced', xp: 200 },
    { id: 'hash-crack', name: 'Hash Cracking', difficulty: 'Beginner', xp: 90 },
  ],
  forensics: [
    { id: 'disk-forensics', name: 'Disk Forensics', difficulty: 'Intermediate', xp: 150 },
    { id: 'memory-forensics', name: 'Memory Forensics', difficulty: 'Advanced', xp: 180 },
  ],
};

export const CTF_CHALLENGES = [
  { id: 1, title: 'Flag in HTML', category: 'Web', difficulty: 'Easy', xp: 50 },
  { id: 2, title: 'SQL Injection Basics', category: 'Web', difficulty: 'Medium', xp: 100 },
  { id: 3, title: 'XSS Challenge', category: 'Web', difficulty: 'Medium', xp: 100 },
  { id: 4, title: 'Simple Cipher', category: 'Crypto', difficulty: 'Easy', xp: 50 },
  { id: 5, title: 'Binary Analysis', category: 'Reverse', difficulty: 'Hard', xp: 150 },
  { id: 6, title: 'OSINT Investigation', category: 'OSINT', difficulty: 'Easy', xp: 60 },
];

export const VULNERABILITIES = [
  {
    id: 'a01',
    title: 'SQL Injection',
    severity: 'Critical',
    cwe: 'CWE-89',
    description: 'Attackers can insert malicious SQL code',
    mitigation: 'Use parameterized queries',
  },
  {
    id: 'a02',
    title: 'Broken Authentication',
    severity: 'Critical',
    cwe: 'CWE-287',
    description: 'Weak authentication mechanisms',
    mitigation: 'Implement strong password policies',
  },
];

export const TERMINAL_COMMANDS = {
  nmap: 'nmap -sV -p 1-1000 example.com',
  ping: 'ping example.com',
  dig: 'dig example.com',
  whois: 'whois example.com',
  curl: 'curl -i https://example.com',
};
