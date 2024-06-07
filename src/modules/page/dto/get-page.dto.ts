import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class GetPageDto {
  @IsOptional()
  @IsNumber()
  @ApiProperty({ required: false })
  pageNumber: number;

  @IsOptional()
  @IsString()
  @ApiProperty({ required: false })
  presentationId: string;
}
