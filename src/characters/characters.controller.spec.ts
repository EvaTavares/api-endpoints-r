import { Test, TestingModule } from '@nestjs/testing';
import { CharactersController } from './characters.controller';
import { CharactersService } from './characters.service';

describe('CharactersController', () => {
  let controller: CharactersController;
  let service: CharactersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CharactersController],
      providers: [CharactersService],
    }).compile();

    controller = module.get<CharactersController>(CharactersController);
    service = module.get<CharactersService>(CharactersService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return characters for a given page', async () => {
    const characters = [];
    const page = 2;
     
    //mokando o método findAll do serviço para retornar caracteres
    jest.spyOn(service, 'findAll').mockResolvedValueOnce(characters);

    // Afirmando que o controlador retorna caracteres para uma determinada página
    expect(await controller.findAll(page)).toEqual(characters);
    // Afirmando que o método findAll do serviço foi chamado com a página correta
    expect(service.findAll).toHaveBeenCalledWith(page);    
  })
});
