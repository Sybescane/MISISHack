import { MigrationInterface, QueryRunner } from "typeorm"

export class MoksInHack1694380144712 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        INSERT INTO public.hackathon(
            "hackathonId", name, date_start, date_end, format, link_on_register, register_end)
            VALUES
            (1, 'AI Generative Product', '2023-08-04', '2023-08-19', 'Онлайн', 'https://ai-hackathon.gigaschool.ru/', '2023-07-31'),
            (2, 'FINODAYS', '2023-07-25', '2023-08-29', 'Онлайн', 'https://changellenge.com/championships/finodays/?mindbox-message-key=7645423325150183424&mindbox-click-id=41e9b62d-2bb4-4654-bb4a-659ab8d7fe93&utm_source=1&utm_medium=1&utm_term=changellenge&utm_campaign=2', '2023-07-24'),
            (3, 'Код города 300 от Сбера', '2023-08-12', '2023-08-13', 'Очный', 'https://xn--300-5cdofb9bxbcax.xn--p1ai/', '2023-07-28'),
            (4, 'Креатив на Волге', '2023-08-19', '2023-08-20', 'Очный', 'http://kreativnavolge.ru/registration', '2023-08-04'),
            (5, 'ТехЛидеры.рф', '2023-10-13', '2023-10-13', 'Онлайн', 'https://техлидеры.рф/', '2023-10-13'),
            (6, 'Татар.Бу Хакатон', '2023-09-08', '2023-09-10', 'Онлайн', 'https://kazandigitalweek.com/ru/sign-up-hackathon', '2023-09-05'),
            (7, 'Арт Вселенная', '2023-09-13', '2023-09-14', 'Онлайн/Очно', 'https://kazandigitalweek.com/ru/sign-up-hackathon', '2023-08-10'),
            (8, 'Цифровой прорыв (НН)', '2023-09-08', '2023-09-10', 'Онлайн/Очно', 'https://hacks-ai.ru/', '2023-08-04'),
            (9, 'UrbanCode', '2023-09-13', '2023-10-14', 'Онлайн/Очно', 'https://changellenge.com/championships/urbancode/#reg', '2023-09-13'),
            (10, 'VTB API Hackathon', '2023-10-07', '2023-10-21', 'Онлайн/Очно', 'https://codenrock.com/auth?reg_on_contest=1007#/register', '2023-10-01'),
            (11, 'USETECH Hackathon', '2023-09-30', '2023-10-01', 'Очный', 'https://www.zavodit.ru/ru/calendar/event/35', '2023-09-25'),
            (12, 'На севере — кодить!', '2023-09-15', '2023-09-23', 'Онлайн/Очно', 'https://xn--c1ad6a.xn--80aegcbawovqtiw4l.xn--p1ai/logIn', '2023-09-11'),
            (13, 'Цифра2023', '2023-09-20', '2023-11-30', 'Онлайн', 'https://www.cifra2023.ru/', '2023-09-20');`
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DELETE FROM public.hackathon WHERE "hackathonId" IN (1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13);        
        `)
    }

}
