use DBI;
$dbh = DBI->connect("dbi:SQLite:perlsqlite.db") || die "Cannot connect";
$dbh->do("create table assessment (id integer, first_name text, last_name text, hometown text)");
$dbh->do("insert into assessment values(1, 'Ryan', 'Salvino', 'Florida')");
$dbh->do("insert into assessment values(2, 'Caitlin', 'Hirsch', 'Texas')");
$dbh->do("insert into assessment values(3, 'Jonathan', 'Benstent', 'Chicago')");
$res = $dbh->selectall_arrayref(q(select * from assessment));
foreach (@$res) {
foreach $i (0..$#$_) {
print "$_->[$i] ";
}
print "\n";
}
