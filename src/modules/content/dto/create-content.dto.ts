import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateContentDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  type: string;

  @IsString()
  @ApiProperty()
  data: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  pageId: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  x: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  y: number;
}
