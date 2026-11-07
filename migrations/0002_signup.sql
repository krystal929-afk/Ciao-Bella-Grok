alter table inbox drop constraint if exists inbox_kind;
alter table inbox add constraint inbox_kind check (kind in ('party', 'catering', 'job', 'letter', 'signup'));
