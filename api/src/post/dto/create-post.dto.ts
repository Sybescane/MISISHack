import { ApiProperty, PickType } from "@nestjs/swagger";
import { Post } from "../entities/post.entity";

export class CreatePostDto extends PickType(Post, ['message', 'title' ] as const) {
    @ApiProperty({description: 'идентификатор создателя поста'})
    userId: number

    @ApiProperty({description: 'идентификатор каталога'})
    catalogId: number
}
