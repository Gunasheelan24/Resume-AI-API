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

    private notes = [
    {
      id: 1,
      title: 'NestJS',
      content: 'Learn controllers and services',
    },
  ];

  getAllNotes() {
    return this.notes;
  }

  getNoteById(id: number) {
    const note = this.notes.find(
      (note) => note.id === id,
    );

    if (!note) {
      throw new NotFoundException(
        `Note with id ${id} not found`,
      );
    }

    return note;
  }
}
