import { Client, Databases } from 'appwrite';

export const client = new Client()
client
  .setEndpoint('https://cloud.appwrite.io/v1') // Seu endpoint Appwrite
  .setProject('6753dfd70032be70523a'); // Substitua pelo ID do seu projeto

export const databases = new Databases(client);