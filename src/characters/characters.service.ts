import { Injectable, NotFoundException } from '@nestjs/common';
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

  async findAll(page: number){
    try {
      const response = await axios.get(`${this.baseUrl}/character/?page=${page}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

 async findOne(id: number) {
    try {
      const response = await axios.get(`${this.baseUrl}/character/${id}`);
      return response.data;
    } catch (error) {
      throw new NotFoundException(`Character with ID ${id} not found.`);
    }
  }

  update(id: number, updateCharacterDto: UpdateCharacterDto) {
    return `This action updates a #${id} character`;
  }

  remove(id: number) {
    return `This action removes a #${id} character`;
  }
}
