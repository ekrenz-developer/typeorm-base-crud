// import {
//   Controller,
//   Version,
//   Post,
//   Get,
//   Put,
//   Delete,
//   Body,
//   Param,
//   Query,
//   ParseIntPipe,
//   UseInterceptors,
//   ClassSerializerInterceptor,
//   UseGuards,
// } from '@nestjs/common';
// import { ApiOperation, ApiTags } from '@nestjs/swagger';

// // import { ApiPaginatedResponse } from '@/common/decorators/api-paginated-response.decorator';
// // import { SchedulerOperationService } from '../operation-services/scheduler.operation-service';
// // import { LoggerService } from '@/logger/services/logger.service';
// // import { SchedulerBodyDto } from '../dtos/scheduler-body.dto';
// // import { SchedulerBodyUpdateDto } from '../dtos/scheduler-body-update.dto';
// // import { SchedulerResponseDto } from '../dtos/scheduler-response.dto';
// // import { PaginationOptionsDto } from '@/common/dtos/pagination-options.dto';
// // import { PaginationResponseDto } from '@/common/dtos/pagination-response.dto';
// // import { JwtAuthGuard } from '@/common/guards/jwt-auth.guard';
// // import { IsTaskIdValidationBodyPipe } from '../pipes/is-task-id-validation-body.pipe';
// // import { IsTypeIdValidationBodyPipe } from '../pipes/is-type-id-validation-body.pipe';
// // import { IsSchedulerIdValidationParamPipe } from '../pipes/is-scheduler-id-validation-param.pipe';

// const module = 'task-scheduler-services';
// const entity = 'schedulers';

// @ApiTags(`${module}`)
// @Controller(`/${module}/${entity}`)
// @UseInterceptors(ClassSerializerInterceptor)
// export class BaseCrudController {
//   private className = SchedulerController.name;

//   constructor(
//     private schedulerOperationService: SchedulerOperationService,
//     private loggerService: LoggerService,
//   ) {}

//   @ApiOperation({ summary: 'create' })
//   @Version('2')
//   @UseGuards(JwtAuthGuard)
//   @Post()
//   async create(
//     @Body(IsTaskIdValidationBodyPipe, IsTypeIdValidationBodyPipe)
//     payload: SchedulerBodyDto,
//   ): Promise<SchedulerResponseDto> {
//     try {
//       this.loggerService.log(`${this.className}.create`);
//       const response = await this.schedulerOperationService.create(payload);
//       return response;
//     } catch (e) {
//       this.loggerService.error(
//         `${this.className}.create error: ${JSON.stringify(e)}`,
//       );
//       throw e;
//     }
//   }

//   @ApiOperation({ summary: 'find one' })
//   @Version('2')
//   @Get(':id')
//   async findOne(
//     @Param('id', ParseIntPipe, IsSchedulerIdValidationParamPipe) id: number,
//   ): Promise<SchedulerResponseDto> {
//     try {
//       this.loggerService.log(`${this.className}.findOne`);
//       const response = this.schedulerOperationService.findOne(id);
//       return response;
//     } catch (e) {
//       this.loggerService.error(
//         `${this.className}.create error: ${JSON.stringify(e)}`,
//       );
//       throw e;
//     }
//   }

//   @ApiOperation({ summary: 'find all' })
//   @ApiPaginatedResponse(SchedulerResponseDto)
//   @Version('2')
//   @Get()
//   async findAll(
//     @Query() paginationsOptionsDto: PaginationOptionsDto,
//   ): Promise<PaginationResponseDto<SchedulerResponseDto>> {
//     try {
//       this.loggerService.log(
//         `${this.className}.findAll options: ${JSON.stringify(
//           paginationsOptionsDto,
//         )}`,
//       );
//       const response = await this.schedulerOperationService.findAll(
//         paginationsOptionsDto,
//       );
//       return response;
//     } catch (e) {
//       this.loggerService.error(
//         `${this.className}.findAll error: ${JSON.stringify(e)}`,
//       );
//       throw e;
//     }
//   }

//   @ApiOperation({ summary: 'update' })
//   @Version('2')
//   @UseGuards(JwtAuthGuard)
//   @Put(':id')
//   async update(
//     @Param('id', ParseIntPipe, IsSchedulerIdValidationParamPipe) id: number,
//     @Body(IsTaskIdValidationBodyPipe, IsTypeIdValidationBodyPipe)
//     payload: SchedulerBodyUpdateDto,
//   ): Promise<SchedulerResponseDto> {
//     try {
//       this.loggerService.log(`${this.className}.update`);
//       const response = await this.schedulerOperationService.update(id, payload);
//       return response;
//     } catch (e) {
//       this.loggerService.error(
//         `${this.className}.update error: ${JSON.stringify(e)}`,
//       );
//       throw e;
//     }
//   }

//   @ApiOperation({ summary: 'remove' })
//   @Version('2')
//   @UseGuards(JwtAuthGuard)
//   @Delete(':id')
//   async remove(
//     @Param('id', ParseIntPipe, IsSchedulerIdValidationParamPipe) id: number,
//   ): Promise<SchedulerResponseDto> {
//     try {
//       this.loggerService.log(`${this.className}.remove`);
//       const response = await this.schedulerOperationService.remove(id);
//       return response;
//     } catch (e) {
//       this.loggerService.error(
//         `${this.className}.remove error: ${JSON.stringify(e)}`,
//       );
//       throw e;
//     }
//   }

//   @ApiOperation({ summary: 'play scheduler' })
//   @Version('2')
//   @UseGuards(JwtAuthGuard)
//   @Get(':id/play')
//   async play(
//     @Param('id', ParseIntPipe, IsSchedulerIdValidationParamPipe) id: number,
//   ): Promise<boolean> {
//     try {
//       this.loggerService.log(`${this.className}.play`);
//       const response = await this.schedulerOperationService.play(id);
//       return response;
//     } catch (e) {
//       this.loggerService.error(
//         `${this.className}.play error: ${JSON.stringify(e)}`,
//       );
//       throw e;
//     }
//   }

//   @ApiOperation({ summary: 'stop scheduler' })
//   @Version('2')
//   @UseGuards(JwtAuthGuard)
//   @Get(':id/stop')
//   async stop(@Param('id', ParseIntPipe) id: number): Promise<boolean> {
//     try {
//       this.loggerService.log(`${this.className}.stop`);
//       const response = await this.schedulerOperationService.stop(id);
//       return response;
//     } catch (e) {
//       this.loggerService.error(
//         `${this.className}.stop error: ${JSON.stringify(e)}`,
//       );
//       throw e;
//     }
//   }
// }
