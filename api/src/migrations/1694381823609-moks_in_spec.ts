import { MigrationInterface, QueryRunner } from "typeorm"

export class MoksInSpec1694381823609 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const arr = ['ML/DS/AI', 'Бэкенд', 'Дизайнер', 'Фронтенд', 'Фуллстек', 
        'Аналитик(презентации и прочее)', 'Вебскрепинг', 'сисадмин', 'архитектор бд', 
        'препроцессинг данных', 'независимый эксперт', 'Мобильная разработка',
        'Python', 'C++', 'C#', 'Java', 'JavaScript', 'HTML/CSS', 'SQL',
        'Kotlin', 'Swift', 'Ruby', 'PHP', 'MySQL', 'PostgreSQL', 'Bash',
        'DevOps', 'Tableau', 'Selenium', 'JMeter', 'Unity', 'Unreal Engine', 'Figma',
        'Perl', 'PowerShell']
        arr.forEach(item => {
            queryRunner.query(`
            INSERT INTO public.specialization(spec_name)
                VALUES ('${item}');
            `)
        })
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`TRUNCATE TABLE public.specialization;`)
    }

}
