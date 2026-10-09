# ELLA+

Site de uma ONG que a gente inventou para o trabalho da faculdade. A ELLA+ não existe de verdade: o nome, os projetos e os valores da campanha são todos fictícios.

A ONG fala sobre câncer de mama, passa informação e acolhe pacientes e familiares. O slogan é "Informação, acolhimento e esperança."

## O que tem no site

São três páginas:

- **index.html**: página inicial. Mostra quem é a ELLA+, a história, a missão, a visão, os valores, os projetos em destaque, quem criou a ONG e as informações de contato.
- **projetos.html**: os quatro projetos (Laço Rosa, ELLA Acolhe, Juntas pela Vida e Doe Esperança), a campanha Outubro Rosa com a barra da meta, uma galeria de fotos, a parte de como doar e o convite pro voluntariado.
- **cadastro.html**: formulário para quem quer ser voluntária, com uma imagem no começo da página.

Os dados de contato (e-mail, telefone e endereço) são de exemplo. A campanha de doação também é só visual. A barra mostra R$ 6.500 de uma meta de R$ 10.000 (65%), mas não existe pagamento nem nada funcionando por trás dela.

## O formulário

Tem nome completo, e-mail, data de nascimento, CPF, telefone, endereço, CEP, cidade e estado. Os campos ficam em dois grupos, "Seus dados" e "Endereço", e todos são obrigatórios.

A validação é a do próprio HTML (`required`, `type="email"`, `pattern`, `minlength`). Em cima disso, o JavaScript coloca a máscara de CPF, telefone e CEP enquanto a pessoa digita, e ainda confere se o CPF é válido.

Ao clicar em cadastrar, aparece só uma mensagem de agradecimento. Os dados não são enviados pra lugar nenhum, porque não tem servidor nem banco de dados.

## Outras coisas que tem

- Menu que vira um botão no celular
- Link "Pular para o conteúdo" para quem usa só o teclado
- Texto alternativo em todas as imagens
- Layout que se ajusta para celular e computador
- Imagens em dois formatos (WebP e JPG), com tamanho reduzido para a página carregar rápido
- Uma barrinha no topo que mostra quanto da página já foi rolado
- Elementos que aparecem aos poucos quando a página rola (isso desliga sozinho se a pessoa reduziu as animações no sistema)

## Tecnologias

HTML5, CSS3 e JavaScript puro, sem biblioteca nenhuma. As fontes (Cormorant Garamond e DM Sans) vêm do Google Fonts, então precisa de internet pra elas carregarem.

## Como abrir

Baixe o projeto e abra o `index.html` no navegador. Não precisa instalar nada.

## Como as pastas estão

```
ong ella+/
├── index.html
├── projetos.html
├── cadastro.html
├── style.css
├── script.js
├── README.md
└── imagens/
    ├── logo-ella.svg
    ├── campanha-ella-2.webp / .jpg
    ├── campanha-ella-3.webp / .jpg
    ├── projeto-ong.webp / .jpg
    ├── projeto-ong-2.webp / .jpg
    └── projeto-ong-3.webp / .jpg
```

## Sobre as informações de saúde

Não inventamos nada sobre câncer de mama. Na página inicial tem um link para o conteúdo do INCA, que é a fonte oficial.

## Quem fez

- Guilherme Muga
- Gustavo Borges
- Jader Gonçalves
- Kleberson Alcântara

Trabalho feito para a disciplina de desenvolvimento web.
