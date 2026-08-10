"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const prisma_service_1 = require("../src/prisma/prisma.service");
const enums_1 = require("../src/generated/prisma/enums");
const bcrypt = __importStar(require("bcryptjs"));
const prisma = new prisma_service_1.PrismaService();
async function main() {
    console.log('Seeding database...');
    const password = await bcrypt.hash('123123', 10);
    const now = new Date();
    const users = [
        {
            email: 'user@onlyxplore.in',
            name: 'Test User',
            password,
            role: enums_1.UserRole.USER,
            emailVerified: now,
        },
        {
            email: 'admin@onlyxplore.in',
            name: 'Admin User',
            password,
            role: enums_1.UserRole.ADMIN,
            emailVerified: now,
        },
        {
            email: 'host@onlyxplore.in',
            name: 'Host User',
            password,
            role: enums_1.UserRole.HOST,
            emailVerified: now,
        },
    ];
    for (const user of users) {
        const createdUser = await prisma.user.upsert({
            where: { email: user.email },
            update: {},
            create: user,
        });
        console.log(`Upserted user: ${createdUser.email} with role ${createdUser.role}`);
    }
    console.log('Seeding finished.');
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map