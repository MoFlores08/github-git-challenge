// let numeroSecreto = parseInt(Math.random() * 11)
// let tentativas = 1
// let chute

// alert('Boas vindas ao jogo do número secreto')

// while (chute != numeroSecreto) {
//     let chute = prompt('Escolha um número entre 1 e 10')
//     if (chute == numeroSecreto) {
//         break
//     } else {
//         if (chute > numeroSecreto) {
//             alert('O número secreto é menor')
//         } else {
//             alert('O número secreto é maior')
//         }
//     }
//     tentativas++
// }

// let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa' 
// alert(`O número secreto era ${numeroSecreto} e você acertou com apenas ${tentativas} ${palavraTentativa}`)
echo "# numero-secreto" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/rodrigoalura87/numero-secreto.git
git push -u origin main

git remote add origin https://github.com/rodrigoalura87/numero-secreto.git
git branch -M main
git push -u origin main
Reinitialized existing Git repository in /home/rodrigo/Projetos/alura/meu-projeto/.git/
git add .
git commit -m "projeto inicial"
git -config --global user.email "your@example.com"
git config --global user.name "Your Name"
git -config --global user.email "rodrigo.alura87@gmail.com"
git config --global user.name "Rodrigo Ferreira"
git branch -M main
git remote add origin git@github.com:rodrigoalura87/numero-secreto.git
git push -u origin main
ssh-keygen -t ed25519 -C "rodrigo.alura87@gmail.com"
git push -u origin main
Generating public/private ed25519 key pair.
Enter file in which to save the key (/home/rodrigo/.ssh/id_ed25519):
Enter passphrase (enter for no passphrase):
Enter same passphrase again:
Your identification has been saved in /home/rodrigo/.ssh/id_ed25519
Your public key has been saved in /home/rodrigo/.ssh/id_ed25519.pub
The key fingerprint is:
SHA256:jxAkhGR7NHm/0fcmyPnErZxSKr+ObsH7r4AC/vUNvPY fulano@email.com.br
The key's randomart image is:
+--[ED25519 256]--+
| .oo=..          |
| ..o.+.          |
|  . .... .       |
|   .   .o . .    |
|  .   ..S+ = o   |
| . .   ++o+ = +  |
|  . . o =o.* =   |
|   . o .=*o =    |
|    .  +=*E=.    |
+----[SHA256]-----+
git remote add apelido url
git remote -v
origin   https://github.com/seu-usuario/seu-projeto.git (fetch)
origin   https://github.com/seu-usuario/seu-projeto.git (push)
git remote remove origin
git remote set-url origin https://github.com/seu-usuario/seu-repositorio.git
git remote rename origin novo-origin
