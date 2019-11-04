<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('WP_CACHE', true);
define( 'WPCACHEHOME', '/home/dh_jr8xp4/eurypaa2019.org/wp-content/plugins/wp-super-cache/' );
define('DB_NAME', 'eurypaa2019_org');

/** MySQL database username */
define('DB_USER', 'eurypaa2019org');

/** MySQL database password */
define('DB_PASSWORD', 'Wxz7cjMT');

/** MySQL hostname */
define('DB_HOST', 'mysql.eurypaa2019.org');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'f9/BaTVe0Xc#d%x^5GL"keZtg&rEB7E1Xe2/Txyss@j7Zte^xG!;_u7A%IOwt:#Z');
define('SECURE_AUTH_KEY',  'eEDaI)+L(@!fWqG%jf#w@Vyw|Ez0$IjjS0%dui5jUzX656fXSO?C%F~pIaiecQ`l');
define('LOGGED_IN_KEY',    'J)W~zFw/T!*?:?yR|XH`71i!79&cgFeFgsSlt8`1BJ5?L*c~"CIrsM!c^5s*%7ed');
define('NONCE_KEY',        'CV8m:f#)e*KTX3LvDu7Avu$EtG&M@&I|z&IY6|BBXI!tYLVpXDUCzLnU:5I^RLX;');
define('AUTH_SALT',        '"S9+SSJ#jtBA:&g6cxOq%!p_ky4V455v:L4g6Q:I#@|;B#frGq!3jXEP*?&aFtxR');
define('SECURE_AUTH_SALT', '#|eybEq*Y:Q1mez5"u?iu@3zaPw$LLYAZ%pg;TIX6z|+i3/eTUO_)(SryPm/K6%&');
define('LOGGED_IN_SALT',   'Na_YU&zMLP"pcS@+OHP7;m"tZiXJ@z4j)tA7FzZAdy(G~^@DNsAU~79@UmhSOLbW');
define('NONCE_SALT',       'Uv^q9kjPe;+Jub*lroawsb&w&NO|_s#IByiypcWE3X@ViMXG/otd!"`Re4uT;lmn');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_sh6djr';

/**
 * Limits total Post Revisions saved per Post/Page.
 * Change or comment this line out if you would like to increase or remove the limit.
 */
define('WP_POST_REVISIONS',  10);

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', '');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

