import express  from "express";
import {
    findbook,
    findbookbyid,
    uploadbook,
    updatebook,
    deletebook
} from "../controller/control.js";

const router = express.Router();
router.get('/book/', findbook)
router.get('/book/:id', findbookbyid)
router.post('/book', uploadbook)
router.put('/book/:id', updatebook)
router.delete('/book/:id', deletebook)

export default router;
