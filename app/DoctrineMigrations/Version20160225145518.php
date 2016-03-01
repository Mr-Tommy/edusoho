<?php

namespace Application\Migrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20160225145518 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql("CREATE TABLE `mobile_category` (
                         `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
                         `title` varchar(255) NOT NULL,
                         `type` varchar(32) NOT NULL,
                         `categoryId` int(10) NOT NULL,
                         `orderType` varchar(32) NOT NULL,
                         `showCount` int(10) NOT NULL,
                         `createTime` int(10) unsigned NOT NULL,
                         `updateTime` int(10) unsigned NOT NULL,
                         PRIMARY KEY (`id`)
                        ) ENGINE=InnoDB AUTO_INCREMENT=94 DEFAULT CHARSET=utf8");

    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs

    }
}
