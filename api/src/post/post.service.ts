import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { Repository } from 'typeorm';
import { Catalog } from './entities/catalog.entity';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class PostService {
  constructor(@InjectRepository(Post) private readonly postRepository: Repository<Post>,
  @InjectRepository(Catalog) private readonly catalogRepository: Repository<Catalog>,
  @InjectRepository(User) private readonly userRepository: Repository<User>){}

  async create(dto: CreatePostDto) {
    const post = this.postRepository.create()
    post.catalog = await this.catalogRepository.findOneBy({
      catalogId: dto.catalogId
    })
    post.message = dto.message
    post.title = dto.title
    post.user = await this.userRepository.findOneBy({userId: dto.userId})
    await this.postRepository.save(post)
    return post
  }

  async findAll() {
    const posts = await this.postRepository.find()
    return posts
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  findCount(count: number){
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
