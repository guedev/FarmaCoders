# EXERCÍCIO - AULA 10-09

###1 - Criar um array com nomes:

ex - const nomes = ['galdanf', 'sauron', 'luke']

### 2 - Criar uma página de login
Dentro da pasta Pages, crie uma página de login e a coloque nas rotas gerenciadas pelo ```MyRoutes.js```

Nessa página de Login você precisa armazenar o nome digitado, seja por ```useNavigate```, ```Link```, ou ```LocalStorage``` e enviar essa informação via estado para página de HOME.

### 3 - Verificar nomes autorizados

Dentro da página de HOME, verificar se o nome que foi digitado na página de LOGIN confere com os nomes que estão dentro do array criado no primeiro passo.

Caso o nome esteja, habilitar um botão para o usuario navegar para a página de CEPS

Caso não, solicitar que o usuário volte para a página de login e digite o nome correto.
