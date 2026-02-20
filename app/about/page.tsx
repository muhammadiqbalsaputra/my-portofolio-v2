'use client'

import React from 'react'
import { Navbar } from '@/components/navbar'
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Code2, 
  Layers, 
  Cpu, 
  Globe, 
  Instagram, 
  Mail, 
  Github, 
  Linkedin 
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const skills = [
  { name: 'Frontend', icon: <Code2 className="size-4" />, items: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'] },
  { name: 'Backend', icon: <Cpu className="size-4" />, items: ['Node.js', 'PostgreSQL', 'Prisma'] },
  { name: 'Design', icon: <Layers className="size-4" />, items: ['Figma', 'Adobe XD', 'Framer Motion'] },
]

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 pt-28 pb-20 lg:pt-40">
        <div className="mx-auto max-w-5xl">
          
          {/* Section: Introduction */}
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative aspect-square overflow-hidden rounded-2xl border bg-muted shadow-2xl">
                <Image
                  src="/assets/logo/Logo bale 2.png" // Gunakan foto asli Anda di sini
                  alt="About Me"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              {/* Floating Badge Experience */}
              <div className="absolute -bottom-4 -right-4 rounded-xl border bg-card p-4 shadow-lg lg:-right-10">
                <p className="text-2xl font-bold text-primary">2+</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Years Exp.</p>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <Badge variant="outline" className="mb-4 text-primary border-primary/20">
                Tentang Saya
              </Badge>
              <h2 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
                Seorang Developer yang Terobsesi dengan <span className="text-primary">Detail</span>.
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Halo! Nama saya **Bale**, seorang pengembang web yang berbasis di Indonesia. Saya sangat menyukai proses mengubah ide kompleks menjadi antarmuka yang sederhana, intuitif, dan cepat.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Fokus utama saya saat ini adalah membangun aplikasi web yang responsif dengan performa tinggi menggunakan ekosistem **React** dan **Next.js**. Saya percaya bahwa kode yang bersih dan desain yang baik adalah kunci kesuksesan produk digital.
              </p>

              {/* Social Links di Halaman About */}
              <div className="mt-8 flex gap-3">
                <Button variant="ghost" size="icon" className="rounded-full" asChild>
                  <Link href="#"><Instagram className="size-5" /></Link>
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full" asChild>
                  <Link href="#"><Github className="size-5" /></Link>
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full" asChild>
                  <Link href="#"><Linkedin className="size-5" /></Link>
                </Button>
              </div>
            </div>
          </div>

          <hr className="my-16 border-muted" />

          {/* Section: Skills/Tools */}
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-bold tracking-tight">Keahlian Utama</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Teknologi dan alat yang sering saya gunakan untuk menghidupkan proyek digital.
              </p>
            </div>
            
            <div className="lg:col-span-2 grid gap-4 sm:grid-cols-2">
              {skills.map((skill, index) => (
                <Card key={index} className="border-muted bg-card/50 backdrop-blur-sm transition-colors hover:bg-muted/30">
                  <CardContent className="p-5">
                    <div className="mb-3 flex items-center gap-2 text-primary">
                      {skill.icon}
                      <span className="font-semibold text-sm uppercase tracking-wide">{skill.name}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item) => (
                        <Badge key={item} variant="secondary" className="font-normal text-[10px]">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA: Contact */}
          <div className="mt-20 rounded-3xl bg-primary px-8 py-12 text-center text-primary-foreground shadow-xl">
            <h3 className="text-3xl font-bold">Tertarik bekerja sama?</h3>
            <p className="mt-4 opacity-90">Saya selalu terbuka untuk mendiskusikan proyek baru atau ide-ide kreatif.</p>
            <Button variant="secondary" size="lg" className="mt-8 rounded-full px-8 font-semibold" asChild>
              <Link href="mailto:emailanda@gmail.com">Kirim Pesan Sekarang</Link>
            </Button>
          </div>

        </div>
      </main>
    </div>
  )
}