import { IsString, IsOptional, IsArray } from 'class-validator';

export class UpdateHostProfileDto {
  @IsString()
  @IsOptional()
  username?: string;

  @IsString()
  @IsOptional()
  firstName?: string;

  @IsString()
  @IsOptional()
  lastName?: string;

  @IsString()
  @IsOptional()
  profilePhoto?: string;

  @IsString()
  @IsOptional()
  bio?: string;

  @IsString()
  @IsOptional()
  hostCategory?: string;

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  hostTypes?: string[];

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  experienceTypes?: string[];

  @IsString()
  @IsOptional()
  primaryLocation?: string;

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  destinations?: string[];

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  travelVibes?: string[];

  @IsString()
  @IsOptional()
  groupSize?: string;

  @IsString()
  @IsOptional()
  yearsExperience?: string;

  @IsString()
  @IsOptional()
  tripsHosted?: string;

  @IsString()
  @IsOptional()
  travelersHosted?: string;

  @IsString()
  @IsOptional()
  instagram?: string;

  @IsString()
  @IsOptional()
  youtube?: string;

  @IsString()
  @IsOptional()
  website?: string;

  @IsString()
  @IsOptional()
  linkedin?: string;

  @IsString()
  @IsOptional()
  organizationName?: string;

  @IsString()
  @IsOptional()
  logo?: string;

  @IsString()
  @IsOptional()
  orgWebsite?: string;

  @IsString()
  @IsOptional()
  orgDescription?: string;

  @IsString()
  @IsOptional()
  teamSize?: string;
}
