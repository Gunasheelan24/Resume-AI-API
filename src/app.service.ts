import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly uploadPath = path.join(process.cwd(), 'storage');
  
  getHello(): string {
    return 'Hello World!';
  };

  
  createFolder(folderName: string) {
    const folderPath = path.join(this.uploadPath, folderName);

    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
    }

    return {
      message: 'Folder created successfully',
      path: folderPath,
    };
  };
}
