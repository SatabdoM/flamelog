
---

# 🔥 Flamelog

**Flamelog** is a X-inspired social platform for learners. Whether you're learning to code, studying a new framework, or reading a technical book, Flamelog helps you document your progress publicly through short-form posts, track your journey, and engage with the learning community.

## 🚀 Features

- 🔐 **Authentication** – Secure signup/login with JWT and OTP.
- 📝 **Learning Posts** – Share short educational posts (like tweets).
- 🏷️ **Tagging System** – Tag posts with topics (e.g., `#Java`, `#React`).
- 💬 **Like, Comment, Share** – Interact with the learning community.
- 🔍 **Search** – Discover posts by tags, keywords, or users.
- 🔥 **Heatmap Tracker** – Visualize your learning streak (GitHub-style).
- 🧠 **Personal Profile** – Track all your contributions and topics.
- 📱 **Cross-platform** – Built for web and mobile.

## 🧱 Tech Stack

### Frontend
- **Desktop**: [Next.js](https://nextjs.org/) (with Tailwind CSS, shadcn/ui)
- **Mobile**: [React Native](https://reactnative.dev/)

### Backend
- **Framework**: [Express.js](https://expressjs.com/) with TypeScript
- **Database**: PostgreSQL with Prisma ORM
- **Validation**: Zod
- **Authentication**: JWT + OTP (NodeMailer)
- **Caching**: Redis
- **Messaging**: Kafka (No Zookeeper)
- **Monorepo Tooling**: Turborepo + pnpm
- **Containerization**: Docker
- **CI/CD & Deployment**: AWS Free Tier + Kubernetes (planned)

## 🧭 Project Structure

```
flamelog/
├── apps/
│   ├── web/              # Next.js frontend
│   ├── mobile/           # React Native app
│   └── server/           # Monolith backend (Express + TS)
├── services/             # Microservices (gradual extraction from monolith)
│   └── test-service/     # Example microservice with own routes
├── packages/             # Shared types, utils, config, etc.
├── .env                  # Environment variables
├── docker/               # Docker config for services
├── turbo.json            # Turborepo config
└── README.md
```

## 🧪 Testing

- **Unit Testing**: [Jest](https://jestjs.io/) (configured)
- **Integration Testing**: Coming soon

## 🔧 Getting Started (Dev Setup)

1. **Clone the repo**
   ```bash
   git clone https://github.com/your-username/flamelog.git
   cd flamelog
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Setup `.env` files** for all apps (see `.env.example`)

4. **Run development servers**
   ```bash
   pnpm dev
   ```

5. **Build all apps**
   ```bash
   pnpm build
   ```

## 🛠️ Microservices Roadmap

- ✅ Monolith MVP in `apps/server`
- 🔜 Split into:
  - `auth-service`
  - `post-service`
  - `user-service`
  - `search-service`
  - `analytics-service`
  - `notification-service`

Each service will communicate via Kafka and use Redis for caching. Prisma will be the primary ORM across services.

## 📦 Future Features

- ✨ AI-based post recommendations
- 🧵 Threaded posts
- 📊 Analytics dashboard
- 🗂️ Topic-based newsletters
- 🌐 GraphQL support

## 🙌 Contributing

Pull requests are welcome! For major changes, open an issue first to discuss what you would like to change.

1. Fork the repo
2. Create your branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

