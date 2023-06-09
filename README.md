# PruebaPagaTodo

Prueba técnica Front End para mostrar habilidades en React-native.

## Estructura del Proyecto

src/
├── data/
│ ├── repositories/
│ │ └── BankRepository.ts
│ └── dataSource/
│ ├── ApiDataSource.ts
│ └── DatabaseDataSource.ts
├── domain/
│ ├── models/
│ │ └── BankObject.ts
│ ├── repositories/
│ │ └── BankRepositoryInterface.ts
│ └── useCases/
│ └── GetBankListUseCase.ts
└── presentation/
├── screens/
│ └── BankListScreen.tsx


## Descripción de Directorios

- `data/`: Contiene los componentes relacionados con la capa de datos, como los repositorios y las fuentes de datos.
- `domain/`: Contiene los componentes relacionados con la lógica de negocio y los casos de uso.
- `presentation/`: Contiene los componentes relacionados con la interfaz de usuario y la presentación.

## Descripción de Archivos

- `BankRepository.ts`: Implementación concreta del repositorio bancario que interactúa con las fuentes de datos.
- `ApiDataSource.ts`: Fuente de datos que obtiene la lista de bancos desde una API externa.
- `DatabaseDataSource.ts`: Fuente de datos que almacena y recupera la lista de bancos desde una base de datos local.
- `BankObject.ts`: Modelo de datos que representa un objeto de banco.
- `BankRepositoryInterface.ts`: Interfaz que define los métodos del repositorio bancario.
- `GetBankListUseCase.ts`: Caso de uso que maneja la lógica para obtener la lista de bancos.
- `BankListScreen.tsx`: Pantalla de la aplicación que muestra la lista de bancos.
- `App.tsx`: Archivo principal de la aplicación que configura y renderiza los componentes principales.

## Instalación y Configuración

A continuación, se detallan los pasos para instalar y configurar el proyecto en un entorno local.

1. Clona el repositorio:

git clone https://github.com/AlanLuna007/PruebaPagaTodo.git


2. Instala las dependencias:

npm install

3. Inicia la aplicación:

//Android 
npx react-native run-android

//ios
npx react-native run-ios


## Contacto

Si tienes alguna pregunta o sugerencia te dejo mi contacto:

- Nombre del responsable: ALAN ANDRES LUNA GUTIERREZ
- Dirección de correo electrónico: alanalgandres@gmail.com



