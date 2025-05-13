import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
// import { useState } from "react"
// import Link from "next/link"           
// import { Button } from "@/components/ui/button"\
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Separator } from "@/components/ui/separator"        \
// import { AuthFormContainer } from "@/components/auth/auth-form-container"