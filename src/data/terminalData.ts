export const TERMINAL_OUTPUT: Record<string, string> = {
  'nmap -sV -p 1-1000 example.com': `Starting Nmap 7.92 at $(date)
Nmap scan report for example.com (93.184.216.34)
Host is up (0.045s latency).

PORT     STATE  SERVICE      VERSION
22/tcp   open   ssh          OpenSSH 7.4
80/tcp   open   http         Apache httpd 2.4.6
443/tcp  open   https        Apache httpd 2.4.6
3306/tcp closed mysql
5432/tcp closed postgresql
`,
  'ping example.com': `PING example.com (93.184.216.34) 56(84) bytes of data.
64 bytes from example.com: icmp_seq=1 ttl=56 time=45.2 ms
64 bytes from example.com: icmp_seq=2 ttl=56 time=43.1 ms
64 bytes from example.com: icmp_seq=3 ttl=56 time=44.5 ms
`,
  'dig example.com': `; <<>> DiG 9.16.1 <<>> example.com
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 45678
;; flags: qr rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 0

;; ANSWER SECTION:
example.com.        3599    IN      A       93.184.216.34
`,
  'whois example.com': `Domain Name: EXAMPLE.COM
Registry Domain ID: D102371337-AGRS
Registrar WHOIS Server: whois.iana.org
Registrar URL: http://www.iana.org
Updated Date: 2022-08-14T07:01:31Z
Creation Date: 1995-06-15T04:00:00Z
`,
  'curl -i https://example.com': `HTTP/1.1 200 OK
Accept-Ranges: bytes
Age: 405933
Cache-Control: max-age=604800
Content-Type: text/html; charset=UTF-8
Date: $(date)
Etag: "3147526947+ident"
Expires: $(date)
Last-Modified: Thu, 17 Oct 2019 07:18:26 GMT
Server: ECS (oxr/83d4)
Vary: Accept-Encoding
X-Cache: HIT
`,
};
