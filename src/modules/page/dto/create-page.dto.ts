import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreatePageDto {
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ example: 1 })
  pageNumber: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: '1' })
  presentationId: string;
}
