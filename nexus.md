FRESH INSTALL:
```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
rustup target add riscv32i-unknown-none-elf
curl https://cli.nexus.xyz/ | sh
```
ERROR:
memory allocation of 8606711792 bytes failed
Aborted (core dumped)
```bash
curl https://cli.nexus.xyz/ | sh  
sudo fallocate -l 8.6G /swapfile  
sudo chmod 600 /swapfile  
sudo mkswap /swapfile  
sudo swapon /swapfile  
curl https://cli.nexus.xyz/ | sh 
```
