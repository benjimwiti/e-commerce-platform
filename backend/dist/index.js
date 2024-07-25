"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const data_1 = require("./data");
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
//import productRoutes from './routes/productRoutes';
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = 5000;
app.use(express_1.default.json());
mongoose_1.default.connect(process.env.MONGO_URI, {}).then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));
app.use('/api/users', userRoutes_1.default);
app.use('/api/products', (req, res) => {
    res.json(data_1.sampleProducts);
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
//# sourceMappingURL=index.js.map