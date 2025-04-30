"use client"

import type React from "react"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface ServiceCardProps {
  id: number
  title: string
  slug: string
  description: string
  icon: React.ReactNode
  index: number
}

export default function ServiceCard({ id, title, slug, description, icon, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="h-full"
    >
      <Card className="h-full bg-secondary/20 border-border/40 overflow-hidden">
        <CardHeader>
          <div className="bg-secondary/50 rounded-xl w-14 h-14 flex items-center justify-center mb-4">{icon}</div>
          <CardTitle className="font-bai-jamjuree">{title}</CardTitle>
          <CardDescription className="font-bai-jamjuree">{description}</CardDescription>
        </CardHeader>
        <CardFooter>
          <Button asChild variant="ghost" className="group font-bai-jamjuree">
            <Link href={`/services/${slug}`}>
              Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
