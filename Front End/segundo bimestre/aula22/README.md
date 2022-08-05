# Aula 22 - Task Runner

`Task Runners` são automatizadores de tarefas. Eles tem a capacidade de fazer muita coisa, facilitam muito o fluxo de trabalho de projetos seja no **desenvolvimento**, **build** ou **deploy**.

## Algumas opções de task runners

- [Grunt](https://gruntjs.com/)
- [Browserify](https://browserify.org/)
- [Gulp](https://gulpjs.com/)

## Configurando fluxo de desenvolvimento

### Inicialização do projeto

```shell
npm init
```

### Instalação de pacotes

```shell
npm install package-name
```

#### Pacotes para desenvolvimento

Pacotes que serão utilizados apenas durante o desenvolvimento, portanto não serão compiladas.

Exemplo: `sass`.

```shell
npm install save-dev package-name
```

#### Pacotes para produção

Pacotes que serão utilizados no código-fonte para compilação.

Exemplo: `bootstrap`.

```shell
npm install save package-name
```

### Criar atalhos para scripts

Os `scripts` no **npm** são simples e escaláveis, algumas vezes limitados, mas são eficientes para criar atalhos para multiplos scripts e configurações.

A criação de atalhos para script(s) é feita no código fonte `package.json`.

```json
{
    ...
    "scripts": {
      "script1": "...",
      "script2": "..."
    },
    ...
}
```