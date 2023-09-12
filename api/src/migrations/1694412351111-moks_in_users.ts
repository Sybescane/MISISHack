import { MigrationInterface, QueryRunner } from "typeorm"

export class MoksInUsers1694412351111 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        INSERT INTO users ("userId", fullname, nickname, about, email, "tgContact", password)
        VALUES
            (1,'Александр Иванов', 'AlexTheCoder', 'Я начинающий программист, который увлекается разработкой веб-приложений и игр. В свободное время люблю заниматься спортом и читать книги.', 'alexivanov@gmail.com', '@alexthecoder', '12345678'),
            (2,'Екатерина Смирнова', 'KateDev', 'Я работаю в крупной IT-компании в качестве разработчика баз данных. В свободное время занимаюсь самообразованием и учу новые технологии.', 'katesmirnova@yandex.ru', '@katedev', '12345678'),
            (3,'Дмитрий Петров', 'DimaCoder', 'Я опытный мобильный разработчик, работаю над созданием приложений для iOS и Android. В свободное время люблю играть на гитаре и путешествовать.', 'dimapetrov@mail.ru', '@dimacoder', '12345678'),
            (4,'Анна Кузнецова', 'AnnaWebDev', 'Я работаю веб-разработчиком в небольшой студии. Увлекаюсь созданием красивых и функциональных сайтов. В свободное время занимаюсь рисованием и фотографией.', 'annakuznetsova@gmail.com', '@annawebdev', '12345678'),
            (5,'Максим Сидоров', 'MaxTheHacker', 'Я увлекаюсь хакерством и кибербезопасностью. Работаю в крупной компании по защите информации. В свободное время занимаюсь обучением других людей и участвую в CTF-соревнованиях.', 'maxsidorov@outlook.com', '@maxthehacker', '12345678'),
            (6,'Ольга Новикова', 'OlgaData', 'Я работаю аналитиком данных в крупной финансовой компании. Увлекаюсь статистическим анализом и машинным обучением. В свободное время занимаюсь йогой и путешествиями.', 'olganovikova@yahoo.com', '@olgadata', '12345678'),
            (7,'Артем Соколов', 'ArtemTester', 'Я работаю тестировщиком в IT-компании. Увлекаюсь автоматизацией тестирования и созданием тестовых сценариев. В свободное время играю в футбол и читаю книги.', 'artemsokolov@hotmail.com', '@artemtester', '12345678'),
            (8, 'Иван Козлов', 'IvanGameDev', 'Я работаю гейм-разработчиком в студии, создаю игры для разных платформ. В свободное время играю в видеоигры и занимаюсь спортом.', 'ivankozlov@gmail.com', '@ivangamedev', '12345678'),
            (9,'Мария Ильина', 'MariaUIUX', 'Я работаю дизайнером интерфейсов в IT-компании. Увлекаюсь созданием красивых и удобных пользовательских интерфейсов. В свободное время занимаюсь йогой и рисованием.', 'mariailina@yahoo.com', '@mariauiux', '12345678'),
            (10,'Алексей Григорьев', 'AlexSysAdmin', 'Я работаю системным администратором в крупной компании. Занимаюсь настройкой и обслуживанием серверов и сетей. В свободное время занимаюсь спортом и путешествиями.', 'alexgrigoriev@outlook.com', '@alexsysadmin', '12345678');
        INSERT INTO public.user_specialization("userId", "specializationId")
        VALUES
            (1, 12),
            (1, 15),
            (1, 16),
            (1, 17),
            (2, 12),
            (2, 13),
            (2, 18),
            (3, 15),
            (3, 19),
            (3, 20),
            (3, 21),
            (4, 17),
            (4, 16),
            (4, 22),
            (4, 23),
            (5, 12),
            (5, 14),
            (5, 21),
            (5, 25),
            (6, 12),
            (6, 25),
            (6, 18),
            (6, 27),
            (7, 12),
            (7, 28),
            (7, 29),
            (7, 15),
            (8, 13),
            (8, 12),
            (8, 30),
            (8, 31),
            (9, 17),
            (9, 16),
            (9, 32),
            (10, 25),
            (10, 12),
            (10, 33),
            (10, 34); 
            `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}