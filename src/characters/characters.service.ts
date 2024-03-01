import { Injectable } from '@nestjs/common';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';
import axios from 'axios';

@Injectable()
export class CharactersService {
  private baseUrl: string;

  constructor() {
    this.baseUrl = process.env.RICK_AND_MORTY_API_URL;
    console.log("Base URL:", this.baseUrl);
  }


  create(createCharacterDto: CreateCharacterDto) {
    return 'aqui é a criação de personagens';
  }

  async findAll(){
    try {
      const response = await axios.get(`${this.baseUrl}/character`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} character`;
  }

  update(id: number, updateCharacterDto: UpdateCharacterDto) {
    return `This action updates a #${id} character`;
  }

  remove(id: number) {
    return `This action removes a #${id} character`;
  }
}
