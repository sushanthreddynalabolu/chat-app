import express from 'express'
import protectRoutes from '../Middleware/protectRoutes.js'
import { getSideBarUsers } from '../controllers/user.controller.js'

const router=express.Router()

router.get("/",protectRoutes,getSideBarUsers)

export default router