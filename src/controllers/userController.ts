// userController.js
import { Request, Response } from 'express'
import prisma from '../utils/db'

export async function getUsers(req: Request, res: Response) {
    const users = await prisma.user.findMany()
    res.json(users)
}