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
